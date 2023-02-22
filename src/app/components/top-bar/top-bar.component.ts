import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimerService } from 'src/app/services/timer/timer.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  providers: [TimerService]
})
export class TopBarComponent implements OnInit, OnDestroy {
  buttonText = 'Checkout'

  constructor(private router: Router, public timerService: TimerService){}

  handleClickCart(){
    this.router.navigate(['/cart'])
  }

  ngOnInit(): void {
    this.timerService.subscribe({})
  }
  ngOnDestroy(): void {
    this.timerService.unsubscribe()
  }
}
