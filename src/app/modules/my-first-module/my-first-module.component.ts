import { Component } from '@angular/core';
import { MyFirstModuleService } from 'src/app/modules/my-first-module/my-first-module-services/my-first-module-service/my-first-module.service';
import { TimerShareableService } from 'src/app/services/timer-shareable/timer-shareable.service';

@Component({
  selector: 'app-my-first-module',
  templateUrl: './my-first-module.component.html',
  styleUrls: ['./my-first-module.component.scss']
})

export class MyFirstModuleComponent {
  showTest = true

  constructor(public myFirstModuleService: MyFirstModuleService, public timerService: TimerShareableService){}
}
