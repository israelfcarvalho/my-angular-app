import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HtmlEventsService {
  private subscriptions: Array<Subscription> = []

  constructor() {}

  createEventObserver<EN extends keyof DocumentEventMap, E extends DocumentEventMap[EN], F extends keyof E>(eventName: EN, field: F){
    const observer = new Observable<{eventName: EN, field: F, value: E[F]}>(observer => {
      function eventListener(event: DocumentEventMap[EN]){
        const value = (<E>event)[field]

        observer.next({eventName, field, value})
      }

      window.document.addEventListener(eventName, eventListener)

      return ({unsubscribe: () => {
        console.log('remove observer of event: ', eventName)
        window.document.removeEventListener(eventName, eventListener)
      }})
    })

    const subscription = observer.subscribe({next: event => {
      let target = 'unknow'

      console.log(`[[DISPATCHED]] event: ${event.eventName} - ${String(event.field)}: ${event.value}`)
    }})

    this.subscriptions.push(subscription)
  }

  unsubscribe(){
    this.subscriptions.forEach(subscription => subscription.unsubscribe())
    this.subscriptions = []
  }
}
