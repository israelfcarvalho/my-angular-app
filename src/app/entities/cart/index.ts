import {Product} from 'src/app/entities/product'

export interface CartItem {
    product: Product
    quantity: number
}

export interface CartItems {
    [key: string | number]: CartItem
}