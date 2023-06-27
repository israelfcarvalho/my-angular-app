import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples.component';
import { LazyLoadDirective } from './components/lazy-load/lazy-load.directive';
import { LazyLoadComponentExampleComponent } from './views/lazy-load-component-example/lazy-load-component-example.component';
import { NgModelExampleComponent } from './views/ng-model-example/ng-model-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExamplesComponent,
    LazyLoadDirective,
    LazyLoadComponentExampleComponent,
    NgModelExampleComponent
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class ExamplesModule { }
