import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, ActivationEnd, NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouterHelperService {
  private $destroy = new Subject()
  
  private _activatedRouteSnapshot: ActivatedRouteSnapshot
  public get activatedRouteSnapshot(){
    return this._activatedRouteSnapshot
  }

  private _navigationEnd$ = new BehaviorSubject<NavigationEnd>(null)
  public get navigationEnd$(){
    return this._navigationEnd$.pipe(filter(event => !!event))
  }

  private _navigationStart$ = new BehaviorSubject<NavigationStart>(null)
  public get navigationStart$(){
    return this._navigationStart$.pipe(filter(event => !!event))
  }

  constructor(private router: Router) { }

  init(){
    this._trackActivatedState()
  }

  private _trackActivatedState(){
    let currentUrl = ''

    this.router.events.pipe(takeUntil(this.$destroy)).subscribe({
      next: (event: RouterEvent) => {
        if(event instanceof NavigationStart){
          this._navigationStart$.next(event)
        }

        if(event instanceof NavigationEnd){
          this._navigationEnd$.next(event)
        }

        if(event instanceof ActivationEnd && this.router.url !== currentUrl){
          currentUrl = this.router.url
          this._activatedRouteSnapshot = event.snapshot
        }
      }
    })
  }

  destroy(){
    this.$destroy.next()
    this.$destroy.complete()
  }
}
