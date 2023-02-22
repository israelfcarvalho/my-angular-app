import { Injectable } from '@angular/core';
import { from, Observable, Observer, of, Subscription } from 'rxjs';

@Injectable()
export class TimerService {
  timer!: Observable<number>
  get timerFormated(){
    const seconds = this._seconds % 60
    const minutes = Math.floor(this._seconds/60) % 60
    const hours = Math.floor(this._seconds/(60*60)) % 24

    return of(`${hours}:${minutes}:${seconds}`)
  }
  get timerArray(){
    return from(['hs'])
  }

  private timerSubscription?: Subscription
  private _seconds = 0

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
    const {complete, next} = observer

    observer.complete = () => {
      if(complete){
        complete()
      }

      this._seconds = 0
    }

    observer.next = (number) => {
      if(next){
        next(number)
      }

      this._seconds = number
    }
    
    if(!this.timerSubscription?.closed){
      this.unsubscribe()
    }

    this.timerSubscription = this.timer.subscribe(observer)
  }

  unsubscribe(){
    this.timerSubscription?.unsubscribe()
    this.timerSubscription = undefined
  }
}
