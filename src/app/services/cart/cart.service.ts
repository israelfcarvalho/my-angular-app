import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { CartItems } from 'src/app/entities/cart';
import { Product } from 'src/app/entities/product';
import { ShippingOptions } from 'src/app/entities/shipping';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: CartItems = {}
  get itemsArray(){
    return Object.values(this.items)
  }

  constructor() { }

  private hasProduct(productId: number){
    return !!this.items[productId]
  }

  clearItems(){
    this.items = {}

    return this.items
  }

  addItem(product: Product, quantity = 1){
    if(this.hasProduct(product.id)){
      this.items[product.id].quantity += quantity
      return true
    }

    this.items[product.id] = {
      product,
      quantity
    }

    return true
  }

  removeItem(productId: number){
    if(!this.hasProduct(productId)){
      return 
    }

    const {[productId]: removed, ...remaining} = this.items
    this.items = remaining

    return removed
  }

  getShippingPrices(): Observable<ShippingOptions>{
    return from(fetch('/assets/shippingData.json').then(res => res.json()))
  }
}

//TODO: Add items counter
/*
  TODO: create an array of items as new items are added
  1. map index of the Array in the items object for quantity updates, item removal
  2. only update items array on removal of item (quantity is 0), and adding of new items
*/
