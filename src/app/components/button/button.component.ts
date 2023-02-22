import { Component, EventEmitter, Input, Output } from '@angular/core';

type ButtonIcon = 'shopping_cart'
type ButtonType = 'button' | 'submit'
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

  @Output() onClick =  new EventEmitter<MouseEvent>()
}


