import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Product} from 'src/app/entities/product'

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent {
  buttonText = 'Notify Me'

  @Input() product!: Product
  @Output() notify = new EventEmitter()

  handleClick(){
    this.notify.emit()
  }
}
