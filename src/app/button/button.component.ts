import { Component } from '@angular/core';

type ButtonIcon = 'shopping_cart'
type ButtonType = 'button'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  text = 'Checkout'
  icon?: ButtonIcon = 'shopping_cart'
  type: ButtonType = 'button'

  handleClick(){
    alert('Button clicked')
  }
}
