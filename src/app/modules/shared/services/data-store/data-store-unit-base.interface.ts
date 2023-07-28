import { BehaviorSubject, Observable } from "rxjs"

export interface StoreAction<T extends string> {
    type: T
}

export type ClearStoreAction = StoreAction<'CLEAR_STORE'> 

export interface ActionDispatch<A extends StoreAction<any>> {
    (action: A): void
}

export type StoreState<S extends ObjectLiteral> = {
    [K in keyof S]: BehaviorSubject<S[K]>
}

export type ReadOnlyStoreState<S extends ObjectLiteral> = {
    [K in keyof S]: Observable<S[K]> & Pick<BehaviorSubject<S[K]>, 'getValue'>
}

export type StoreStateMeta<S extends ObjectLiteral> = {
    [K in keyof S]?: {
        dirty: boolean
    }
}