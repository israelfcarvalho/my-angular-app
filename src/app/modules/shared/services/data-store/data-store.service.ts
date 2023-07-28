import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  private cleanSubject$ = new Subject<never>()

  constructor() { }

  clean(){
    this.cleanSubject$.next()
  }

  onClean(){
    return this.cleanSubject$.asObservable()
  }
}
