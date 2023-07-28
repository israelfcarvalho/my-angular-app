import { Observable, Subject } from 'rxjs';

import { DataStoreService } from './data-store.service'
import { ClearStoreAction, StoreAction, StoreState, StoreStateMeta } from './data-store-unit-base.interface'
import { DataStoreUpdater } from './data-store-updater-base'
import { DataStoreObserver } from './data-store-observer-base';
import { skip, take, tap } from 'rxjs/operators';

interface DataStoreSelectOptions {
    skipInitialState?: boolean
}

const dataStoreSelectOptions: DataStoreSelectOptions = {
    skipInitialState: true
}

export abstract class DataStoreUnitBase<S extends ObjectLiteral, A extends StoreAction<string>> {
    private actionSubject$ = new Subject<A | ClearStoreAction>()
    private stateMeta: StoreStateMeta<S> = {}
    
    constructor(
        private dataStoreService: DataStoreService,
        protected state: StoreState<S>,
        private dataStoreUpdater: DataStoreUpdater<S, A | ClearStoreAction>,
        private dataStoreObserver: DataStoreObserver<S, A | ClearStoreAction>,

    ){
        this.init()
    }

    private init(){
        this.dataStoreObserver.init(this.dispatch.bind(this), this.state)
        this.dataStoreUpdater.init(this.state)
        this.initStateMeta()

        this.dataStoreService.onClean().subscribe({
            next: () => {
                this.dispatch({type: 'CLEAR_STORE'})
            }
        })

        this.actionSubject$.subscribe({
            next: action => {
                this.dataStoreUpdater.updater(action)
                this.dataStoreObserver.observer(action)

                if(action.type === 'CLEAR_STORE'){
                    this.initStateMeta()
                }
            }
        })

        for (const statePortion in this.state) {
            this.state[statePortion].pipe(
                skip(1),
                tap(() => this.stateDirty(statePortion)),
                take(1)
            ).subscribe()
        }
    }

    private initStateMeta(){
        for (const key in this.state) {
           this.stateMeta[key] = {
            dirty: false
           }
        }
    }

    private stateDirty<SP extends keyof S>(statePortion: SP){
        const meta = this.stateMeta[statePortion]

        if(!meta.dirty){
          meta.dirty = true
        }
    }

    protected dispatch(action: Exclude<A, ClearStoreAction> | ClearStoreAction){
        this.actionSubject$.next(action)
    }

    select$<SP extends keyof S>(statePortion: SP, options: DataStoreSelectOptions = {}): Observable<S[SP]> {
        const fullOptions: DataStoreSelectOptions = {
            ...dataStoreSelectOptions,
            ...options
        }

        const skipFirst = !this.stateMeta[statePortion].dirty && fullOptions.skipInitialState

        return this.state[statePortion].pipe(skip(skipFirst ? 1 : 0))
    }

    select<SP extends keyof S>(statePortion: SP): S[SP] {
        return this.state[statePortion].getValue()
    }
}