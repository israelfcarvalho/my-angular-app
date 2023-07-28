import { ClearStoreAction, StoreAction, StoreState } from './data-store-unit-base.interface'

interface Updater<A extends StoreAction<any>, Ctx extends ObjectLiteral> {
    (action: A): void
    bind(thisArg: Ctx, action: A): Updater<A, Ctx>
}

type Updaters<A extends StoreAction<any>, Ctx extends ObjectLiteral> = {
    [T in A['type']]?: Updater<StoreAction<T>, Ctx>
}

export abstract class DataStoreUpdater<S extends ObjectLiteral, A extends StoreAction<string>> {
    private updaters: Updaters<any, this> = {}
    protected state: StoreState<S>

    constructor(){}

    init(state: StoreState<S>){
        this.state = state
        this.registerUpdaters()
    }

    updater(action: A) {
        const updater = this.updaters[action.type]?.bind(this, action)

        if(updater){
            updater(action)
        }
    }

    protected register(updaters: Updaters<Exclude<A, ClearStoreAction>, this>){
        const clearUpdaters: Updaters<ClearStoreAction, this> = {
            CLEAR_STORE: this.onClearStore
        }

        this.updaters = {
            ...updaters,
            ...clearUpdaters
        }
    }

    protected abstract onClearStore(): void
    protected abstract registerUpdaters(): void
}