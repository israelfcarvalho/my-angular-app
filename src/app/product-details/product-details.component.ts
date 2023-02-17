import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Product, products } from '../entities/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  product?: Product

  constructor(private activated: ActivatedRoute){}

  ngOnInit(){
    const params = this.activated.snapshot.paramMap
    const productId = Number(params.get('productId'))

    this.product = products.find(product => product.id === productId)
  }
}

//TODO: Add add some back button
//TODO: Style this page
//TODO: See a form of animation between navigation from / to /products/:productId