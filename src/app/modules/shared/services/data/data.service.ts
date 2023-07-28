import { Injectable } from '@angular/core';

type Data = ObjectLiteral | Array<any>

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private _fullCopy(data: any): any{
    if(!data || typeof data !== 'object'){
      return data
    }

    if(Array.isArray(data)){
      return data.map(item => this._fullCopy(item))
    }

    const newData = {...data}

    Object.entries(data).forEach(([key, value]) => newData[key] = this._fullCopy(value))

    return newData
  }

  fullCopy<D extends Data>(data: D): D {
    return this._fullCopy(data)
  }

  objectToArray<O extends ObjectLiteral>(object: O, fullCopy = false): Array<ValuesOf<O>>{
    if(typeof object !== 'object'){
      return  [object]
    } else if(Array.isArray(object)){
      return object
    }

    return Object.values(fullCopy ? this._fullCopy(object) :  object)
  }
}