import { Component } from '@angular/core';
import { products, Product } from 'src/app/entities/product';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  sharedButtonText = 'Share'
  products: Array<Product> = products

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
