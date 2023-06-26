import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFirstModuleRoutingModule } from './my-first-module-routing.module';
import { MyFirstModuleComponent } from './my-first-module.component';
import { ComponentsModule } from 'src/app/modules/shared/components/components.module';
import { MyFirstModuleServicesModule } from './my-first-module-services/my-first-module-services.module';


@NgModule({
  declarations: [
    MyFirstModuleComponent
  ],
  imports: [
    CommonModule,
    MyFirstModuleRoutingModule,
    ComponentsModule,
    MyFirstModuleServicesModule
  ]
})
export class MyFirstModuleModule { }
