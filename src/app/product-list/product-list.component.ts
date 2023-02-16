import { Component } from '@angular/core';
import { products, Product } from 'src/app/entities/product';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Array<Product> = products

  formatProductTitle(name: string){
    return `${name} details`
  }

  share() {
    window.alert('The product has been shared!');
  }
}
