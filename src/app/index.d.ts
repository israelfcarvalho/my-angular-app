declare interface ObjectLiteral {
    [K: string | number | symbol]: any
}

declare interface Class<T extends ObjectLiteral> {
    new (...args: Array<any>): T
}

declare type Keyof<T extends ObjectLiteral> = keyof T