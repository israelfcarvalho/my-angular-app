import { Injectable } from '@angular/core';
import { from, interval, map, Observable, of, share } from 'rxjs';

@Injectable()
export class TimerService {
  timer!: Observable<number>
  timerShareable!:Observable<number>

  constructor() {
    this.createTimer()
  }

  protected createTimer(){
    this.timer = interval(1000)
    this.timerShareable = this.timer.pipe(share())
  }

  hours(){
    return this.timer.pipe(map(time => Math.floor(time/(60*60)) % 24))
  }

  minutes(){
    return map<number, number>(time => Math.floor(time/60) % 60)(this.timer)
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
