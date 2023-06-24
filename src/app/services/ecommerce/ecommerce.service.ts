import { Injectable } from "@angular/core"

@Injectable()
export class EcommerceService {
  name: string

  constructor() { 
    this.name = 'base'
  }
}
