import { Injectable } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Injectable()
export class TimerService {
  timer!: Observable<number>
  private timerSubscription?: Subscription

  constructor() { 
    this.createTimer()
  }

  private createTimer(){
    this.timer = new Observable((observer) => {
      let timePassed = 0
      observer.next(0)
      const interval = setInterval(() => {
        timePassed+=1
        observer.next(timePassed)
      }, 1000)

      return {
        unsubscribe: () => {
          clearInterval(interval)
        }
      }
    })
  }

  subscribe(observer: Partial<Observer<number>>){
    this.timerSubscription = this.timer.subscribe(observer)
  }

  unsubscribe(){
    this.timerSubscription?.unsubscribe()
    this.timerSubscription = undefined
  }

}
