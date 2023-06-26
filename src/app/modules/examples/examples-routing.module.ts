import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplesComponent } from './examples.component';
import { LazyLoadComponentExampleComponent } from './views/lazy-load-component-example/lazy-load-component-example.component';
import { NgModelExampleComponent } from './views/ng-model-example/ng-model-example.component';

const RoutePaths = {
  default: '',
  lazyLoadComponent: 'lazy-load-component',
  ngModel: 'ng-model'
}

const routes: Routes = [
  { path: RoutePaths.default, component: ExamplesComponent, data: {routes: Object.values(RoutePaths)} },
  { path: RoutePaths.lazyLoadComponent, component: LazyLoadComponentExampleComponent },
  { path: RoutePaths.ngModel, component: NgModelExampleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
