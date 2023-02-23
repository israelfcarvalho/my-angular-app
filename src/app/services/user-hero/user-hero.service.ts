import { Injectable } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { UserService } from 'src/app/services/user/user.service';

@Injectable()
export class UserHeroService extends UserService {
  override get name(){
    return `israel ${this.cartService.itemsArray.length}`
  }

  constructor(private cartService: CartService) { 
    super()
  }
}
