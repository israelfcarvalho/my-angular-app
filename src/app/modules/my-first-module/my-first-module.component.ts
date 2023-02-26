import { Component } from '@angular/core';
import { MyFirstModuleService } from 'src/app/services/my-first-module-service/my-first-module.service';

@Component({
  selector: 'app-my-first-module',
  templateUrl: './my-first-module.component.html',
  styleUrls: ['./my-first-module.component.scss']
})

export class MyFirstModuleComponent {
  showTest = true

  constructor(public myFirstModuleService: MyFirstModuleService ){}
}
