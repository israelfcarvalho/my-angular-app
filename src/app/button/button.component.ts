import { Component, Input } from '@angular/core';

type ButtonIcon = 'shopping_cart'
type ButtonType = 'button'
type ButtonKind = 'primary' | 'secondary'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  @Input() text = 'Click'
  @Input() icon?: ButtonIcon
  @Input() type?: ButtonType = 'button'
  @Input() kind?: ButtonKind = 'primary' 

  @Input() onClick?: VoidFunction 

  handleClick(){
    if(this.onClick){
      this.onClick()
    }
  }
}
