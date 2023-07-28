import { ClearStoreAction, ActionDispatch, StoreAction, StoreState, ReadOnlyStoreState } from './data-store-unit-base.interface'

interface Observer<A extends StoreAction<any>, Ctx extends ObjectLiteral> {
    (action: A): void
    bind(thisArg: Ctx, action: A): Observer<A, Ctx>
}

type Observers<A extends StoreAction<string>, Ctx extends ObjectLiteral> = {
    [T in A['type']]?: Observer<StoreAction<T>, Ctx>
}

export abstract class DataStoreObserver<S extends ObjectLiteral, A extends StoreAction<string>> {
    private observers: Observers<A, this> = {}
    protected dispatch: ActionDispatch<Exclude<A, ClearStoreAction>>
    protected state: ReadOnlyStoreState<S>

    init(dispatch: ActionDispatch<Exclude<A, ClearStoreAction>>, state: StoreState<S>){
        this.registerObservers()
        this.dispatch = dispatch
        this.state = state 
    }

    observer(action: A){
        const observer = this.observers[action.type]?.bind(this, action)

        if(observer){
            observer(action)
        }
    }

    protected register(observers: Observers<Exclude<A, ClearStoreAction>, this>){
        const clearStoreObserver: Observers<ClearStoreAction, this> = {
            CLEAR_STORE: this.onClearStore
        }

        this.observers = {
            ...observers,
            ...clearStoreObserver
        }
    }

    protected abstract registerObservers(): void
    protected abstract onClearStore(): void
}