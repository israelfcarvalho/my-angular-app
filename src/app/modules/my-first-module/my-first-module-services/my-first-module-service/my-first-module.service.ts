import { Injectable } from '@angular/core';
import { MyFirstModuleServicesModule } from '../my-first-module-services.module';

@Injectable({
  providedIn: MyFirstModuleServicesModule
})
export class MyFirstModuleService {
  title = 'My first Module'

  constructor() { }
}
