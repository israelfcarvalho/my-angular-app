import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  buttonText = 'Checkout'

  constructor(private cartService: CartService){}

  handleClickCart(){
    const itemsCount = Object.keys(this.cartService.items).length

    window.alert(`You have ${itemsCount} items in the cart!`)
  }
}
