import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { CartService } from '../cart.service';
import { ShippingOptions } from '../entities/shipping';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent {
  shippingCosts: Observable<ShippingOptions>

  constructor(private cartService: CartService){
    this.shippingCosts = this.cartService.getShippingPrices()

    this.shippingCosts.subscribe((...params) => {
      console.log({params})
    })
  }
}
