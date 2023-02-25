import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstModuleComponent } from './my-first-module.component';

const routes: Routes = [{ path: '', component: MyFirstModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFirstModuleRoutingModule { }
