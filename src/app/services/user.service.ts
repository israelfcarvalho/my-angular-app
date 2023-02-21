import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  get name(){
    return 'israel'
  }

  constructor() { }
}
