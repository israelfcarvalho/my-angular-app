import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  buttonText = 'Checkout'

  handleClickCart(){
    alert('go to checkout ' + this.buttonText)
  }
}
