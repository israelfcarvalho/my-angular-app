import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities/product';
import { ProductService } from 'src/app/services/product/product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  sharedButtonText = 'Share'
  products: Array<Product> = []

  constructor(private productService: ProductService){}

  ngOnInit(): void {
      this.productService.getAll()
        .subscribe({
          next: products => {
            this.products = products
          }
        })
  }

  formatProductTitle(name: string){
    return `${name} details`
  }

  handleShare() {
    window.alert('The product has been shared!');
  }

  handleNotify(){
    window.alert('You will be notified when the product goes on sale')
  }
}
