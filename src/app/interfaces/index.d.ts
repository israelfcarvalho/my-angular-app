declare type ObjectLiteral = {
    [key: string ]: any
}

declare type ValuesOf<O extends ObjectLiteral> = O[keyof O]