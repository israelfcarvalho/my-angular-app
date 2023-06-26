import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadComponentExampleRoutingModule } from './lazy-load-component-example-routing.module';
import { LazyLoadComponentExampleComponent } from './lazy-load-component-example.component';
import { ComponentsModule } from '../shared/components/components.module';


@NgModule({
  declarations: [
    LazyLoadComponentExampleComponent
  ],
  imports: [
    CommonModule,
    LazyLoadComponentExampleRoutingModule,
    ComponentsModule
  ]
})
export class LazyLoadComponentExampleModule { }
