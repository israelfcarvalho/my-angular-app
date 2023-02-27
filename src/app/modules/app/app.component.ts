import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { HtmlEventsService } from 'src/app/services/html-events/html-events.service';
import { TimerShareableService } from 'src/app/services/timer-shareable/timer-shareable.service';
import { MyFirstModuleService } from '../my-first-module/my-first-module-services/my-first-module-service/my-first-module.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private htmlEventsService: HtmlEventsService, 
    private timerShareableService: TimerShareableService,
    public router: Router
  ){}

  ngOnInit(): void {
    this.htmlEventsService.createEventObserver('keydown', 'code')
    this.timerShareableService.timer.subscribe({next(value){console.log(`timer on app root: ${value}`)}})

    this.router.events.pipe(
      filter(event => event instanceof NavigationStart),
      map(value => {
        console.log({value})
        return value
      })
    ).subscribe()
  }
  
  ngOnDestroy(): void {
    this.htmlEventsService.unsubscribe()
    this.timerShareableService.destroy()
  }
  
}
