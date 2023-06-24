import { Injectable } from '@angular/core';
import { EcommerceService } from './ecommerce.service';

@Injectable()
export class EcommerceIsaacService extends EcommerceService{
  constructor() { 
    super()

    this.name = 'isaac'
  }
}
