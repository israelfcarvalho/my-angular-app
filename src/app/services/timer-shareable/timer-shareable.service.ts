import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { TimerService } from '../timer/timer.service';

@Injectable({
  providedIn: 'root'
})
export class TimerShareableService extends TimerService {
  private observerId = 0
  private observers: Map<number, Observer<number>> = new Map()
  private _time = 0
  private timerIntervalId!: ReturnType<typeof setInterval>

  constructor() {
    super()
    this.initTimer()
  }

  protected override createTimer(){
    this.timer = new Observable<number>(observer => {
      const observerId = this.observerId++
      this.observers.set(observerId, observer)

      return {
        unsubscribe: () => {
          console.log(`unsubscribe observer - Id: ${observerId}`)
          this.observers.delete(observerId)
        }
      }
    })
  }

  private initTimer(){
    this.logAndNotify()

    this.timerIntervalId = setInterval(() => {
      this._time++
      this.logAndNotify()
    }, 1000)
  }

  private log(){
    console.log(`observers: ${this.observers.size}`)
  }

  private notify(){
    this.observers.forEach(observer => observer.next(this._time))
  }

  private logAndNotify(){
    this.log()
    this.notify()
  }

  destroy(){
    clearInterval(this.timerIntervalId)
    this.observers.forEach(observer => observer.complete())
    this.observers.clear()
  }
}
