import { Component, OnDestroy, OnInit } from '@angular/core';
import { HtmlEventsService } from './services/html-events/html-events.service';
import { TimerShareableService } from './services/timer-shareable/timer-shareable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private htmlEventsService: HtmlEventsService, private timerShareableService: TimerShareableService){}

  ngOnInit(): void {
    this.htmlEventsService.createEventObserver('keydown', 'code')
    this.timerShareableService.timer.subscribe({next(value){console.log(`timer on app root: ${value}`)}})
  }
  
  ngOnDestroy(): void {
    this.htmlEventsService.unsubscribe()
    this.timerShareableService.destroy()
  }
  
}
