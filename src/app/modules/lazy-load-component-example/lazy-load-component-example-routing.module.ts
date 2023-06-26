import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadComponentExampleComponent } from './lazy-load-component-example.component';

const routes: Routes = [{ path: '', component: LazyLoadComponentExampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadComponentExampleRoutingModule { }
