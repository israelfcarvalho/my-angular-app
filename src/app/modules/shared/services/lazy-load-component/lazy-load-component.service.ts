import { ComponentFactoryResolver, Injectable, Injector, Type, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyLoadComponentService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector) { }

  async loadInstance<C extends object>(viewContainerRef: ViewContainerRef, component: Type<C>){
    //since v13 of angular this will not be needed.
    //see https://angular.io/api/core/ComponentFactoryResolver
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component)
    
    //since v13 'createComponent' don't need a componentFactory, it can receive the component class directly
    //see https://angular.io/api/core/ViewContainerRef#createComponent
    //the 'injector' need to be passed so the component have access to singleton services
    return viewContainerRef.createComponent(componentFactory, null, this.injector)
  }
}
