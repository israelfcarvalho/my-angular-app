import { ComponentRef, Injectable, Injector, Type, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyLoadService {
  constructor(private injector: Injector) { }

  load<T extends ObjectLiteral>(viewContainerRef: ViewContainerRef, component: Class<T>){
    return viewContainerRef.createComponent(component, {injector: this.injector})
  }
}
