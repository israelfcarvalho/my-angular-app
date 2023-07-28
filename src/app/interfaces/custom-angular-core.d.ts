import * as angular from '@angular/core';

declare module "@angular/core" {
    type OnChangesCustom<T extends ObjectLiteral> = {
        ngOnChanges(values: SimpleChangesCustom<T>): void
    } & T

    type SimpleChangeCustom<V> = {
        previousValue?: V,
        currentValue: V
    }
    
    type SimpleChangesCustom<T extends ObjectLiteral> = {
        [propName in keyof T]?: SimpleChangeCustom<T[propName]>
    }
}