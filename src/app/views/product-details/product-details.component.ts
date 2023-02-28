import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from 'src/app/entities/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  buyText = 'Buy'
  product?: Product

  constructor(
    private activatedRouteService: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService
  ){}

  ngOnInit(){
    const params = this.activatedRouteService.snapshot.paramMap
    const productId = Number(params.get('productId'))

    this.productService.getById(productId).subscribe({
      next: product => {
        this.product = product
      }
    })
  }

  addToCart(product: Product){
    this.cartService.addItem(product)
  }
}

//TODO: Add add some back button
//TODO: Style this page
//TODO: See a form of animation between navigation from / to /products/:productId