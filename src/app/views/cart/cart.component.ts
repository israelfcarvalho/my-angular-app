import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { UserHeroService } from 'src/app/services/user-hero.service';
import { UserService } from 'src/app/services/user.service';

const checkoutFormInitialData = {
  name: '',
  address: ''
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [{provide: UserService, useClass: UserHeroService}]
})
export class CartComponent {
  items = this.cartService.itemsArray
  checkoutForm = this.formBuilder.group(checkoutFormInitialData)

  constructor(
    private cartService: CartService, 
    private formBuilder: FormBuilder,
    public user:UserService
  ){}

  onSubmit(){
    this.cartService.clearItems()
    this.items = this.cartService.itemsArray

    console.warn('Your order has been submited', this.checkoutForm.value)

    this.checkoutForm.reset(checkoutFormInitialData)
  }
}

//TODO: Add validation to de form
//TODO: perhaps create a custom FormBuilder to extend the current module and add some things like add initialData
