import { Component } from '@angular/core';

@Component({
  selector: 'app-lazy-load-component-example',
  templateUrl: './lazy-load-component-example.component.html',
  styleUrls: ['./lazy-load-component-example.component.scss']
})
export class LazyLoadComponentExampleComponent {
  showComponent = false

  load(){
    this.showComponent = !this.showComponent
  }

  onLazyLoadComponentEmmit(event: string){
    alert(event)
  }
}
