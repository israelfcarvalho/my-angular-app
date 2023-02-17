import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem, CartItems } from '../entities/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items: Array<CartItem> = Object.keys(this.cartService.items).map(cartItemKey => this.cartService.items[cartItemKey])

  constructor(private cartService: CartService){}
}
