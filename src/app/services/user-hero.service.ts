import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { UserService } from './user.service';

@Injectable()
export class UserHeroService extends UserService {
  override get name(){
    return `israel ${this.cartService.itemsArray.length}`
  }

  constructor(private cartService: CartService) { 
    super()
  }
}
