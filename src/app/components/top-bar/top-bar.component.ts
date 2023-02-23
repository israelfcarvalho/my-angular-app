import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TimerService } from 'src/app/services/timer/timer.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  providers: [TimerService]
})
export class TopBarComponent implements OnInit, OnDestroy {
  buttonText = 'Checkout'
  private _timer: number = 0
  private timerSubscription!: Subscription
  get timer(){
    return TimerService.format(this._timer)
  }
  get timerUnit(){
    return TimerService.timerArray
  }

  constructor(private router: Router, private timerService: TimerService){}

  handleClickCart(){
    this.router.navigate(['/cart'])
  }

  ngOnInit(): void {
    this.timerService.timer.subscribe({
      next: (time) => {
        this._timer = time
      },
      complete: () => {
        this._timer = 0
      }
    })
  }

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe()
  }
}
