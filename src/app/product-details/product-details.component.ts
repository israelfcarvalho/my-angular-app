import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { CartService } from '../cart.service';
import { Product, products } from '../entities/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  buyText = 'Buy'
  product?: Product

  constructor(
    private activatedRouteService: ActivatedRoute,
    private cartService: CartService
  ){}

  ngOnInit(){
    const params = this.activatedRouteService.snapshot.paramMap
    const productId = Number(params.get('productId'))

    this.product = products.find(product => product.id === productId)
  }

  addToCart(product: Product){
    this.cartService.addItem(product)
    window.alert(`${product.name} has been added to the cart!`)
  }
}

//TODO: Add add some back button
//TODO: Style this page
//TODO: See a form of animation between navigation from / to /products/:productId