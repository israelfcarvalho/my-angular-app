export enum ShippingType {
    overnight = "Overnight",
    twoDay = '2-Day',
    postal = 'Postal'
}

export interface ShippingInfo {
    type: ShippingType
    price: number
}

export type ShippingOptions = Array<ShippingInfo>