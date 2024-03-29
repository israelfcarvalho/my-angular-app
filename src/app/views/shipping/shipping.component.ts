import { Component, OnDestroy } from '@angular/core';
import { catchError, Observable, retry, Subscription } from 'rxjs';

import { CartService } from 'src/app/services/cart/cart.service';
import { ShippingOptions } from 'src/app/entities/shipping';
import { TimerShareableService } from 'src/app/services/timer-shareable/timer-shareable.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnDestroy{
  private timerSubscription: Subscription 
  shippingCosts: Observable<ShippingOptions>

  constructor(private cartService: CartService, private timerShareableService: TimerShareableService){
    this.shippingCosts = 
      this.cartService.getShippingPrices().pipe(
        retry(2),
        catchError(err => {
          console.log(err)
          return []
        })
      )

    this.timerSubscription = this.timerShareableService.timer.subscribe({
      next(value){
        console.log(`timer on shipping component: ${value}`)
      }
    })
  }

  ngOnDestroy(): void {
    console.log(`timer on shipping component - closed: ${this.timerSubscription.closed}`)
    this.timerSubscription.unsubscribe()
  }
}
