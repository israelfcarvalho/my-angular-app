import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  buttonText = 'Checkout'

  constructor(private router: Router){}

  handleClickCart(){
    this.router.navigate(['/cart'])
  }
}
