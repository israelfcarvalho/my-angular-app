import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples.component';
import { LazyLoadDirective } from './components/lazy-load/lazy-load.directive';
import { LazyLoadComponentExampleComponent } from './views/lazy-load-component-example/lazy-load-component-example.component';


@NgModule({
  declarations: [
    ExamplesComponent,
    LazyLoadDirective,
    LazyLoadComponentExampleComponent
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule
  ],
})
export class ExamplesModule { }
