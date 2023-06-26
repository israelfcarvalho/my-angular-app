import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplesComponent } from './examples.component';
import { LazyLoadComponentExampleComponent } from './views/lazy-load-component-example/lazy-load-component-example.component';

const routes: Routes = [
  { path: '', component: ExamplesComponent },
  { path: 'lazy-load-component', component: LazyLoadComponentExampleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
