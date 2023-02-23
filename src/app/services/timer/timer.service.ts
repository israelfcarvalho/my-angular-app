import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable()
export class TimerService {
  timer!: Observable<number>

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

  static format(timeInSeconds: number){
    const seconds = timeInSeconds % 60
    const minutes = Math.floor(timeInSeconds/60) % 60
    const hours = Math.floor(timeInSeconds/(60*60)) % 24

    return of(`${hours}:${minutes}:${seconds}`)
  }

  static get timerArray(){
    return from(['hs'])
  }
}
