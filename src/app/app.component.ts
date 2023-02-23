import { Component, OnDestroy, OnInit } from '@angular/core';
import { HtmlEventsService } from './services/html-events/html-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private htmlEventsService: HtmlEventsService){}

  ngOnInit(): void {
    this.htmlEventsService.createEventObserver('keydown', 'code')
  }
  ngOnDestroy(): void {
    this.htmlEventsService.unsubscribe()
  }
  
}
