import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFirstModuleRoutingModule } from './my-first-module-routing.module';
import { MyFirstModuleComponent } from './my-first-module.component';
import { ComponentsModule } from 'src/app/modules/components/components.module';


@NgModule({
  declarations: [
    MyFirstModuleComponent
  ],
  imports: [
    CommonModule,
    MyFirstModuleRoutingModule,
    ComponentsModule
  ]
})
export class MyFirstModuleModule { }
