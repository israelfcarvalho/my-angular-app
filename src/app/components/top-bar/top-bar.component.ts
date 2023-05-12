import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Subscription, take } from 'rxjs';
import { TimerService } from 'src/app/services/timer/timer.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  providers: [TimerService]
})
export class TopBarComponent implements OnInit, OnDestroy {
  environment = environment.context
  buttonText = 'Checkout'
  private _timer: number = 0
  private timerSubscription?: Subscription
  private secondTimerSubscription?: Subscription
  get timer(){
    return TimerService.format(this._timer)
  }
  get timerUnit(){
    return TimerService.timerArray
  }

  constructor(private router: Router, private timerService: TimerService){}

  handleClickCart(){
    this.router.navigate(['/cart'])

    if(!this.secondTimerSubscription?.closed){
      this.secondTimerSubscription?.unsubscribe()
    }

    this.secondTimerSubscription = 
      this.timerService.timerShareable
        .pipe(map(time => `shareable timer in second subscription: ${time}`), take(2))
        .subscribe({
          next(value){console.log(value)},
          complete(){
            console.log(`complete shareable timer`)
          }
        })
  }

  ngOnInit(): void {
    this.timerSubscription = this.timerService.timerShareable.subscribe({
      next: (time) => {
        this._timer = time
      },
      complete: () => {
        this._timer = 0
      }
    })
  }

  ngOnDestroy(): void {
    this.timerSubscription?.unsubscribe()
  }
}
