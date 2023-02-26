import { Injectable } from '@angular/core';
import { MyFirstModuleModule } from 'src/app/modules/my-first-module/my-first-module.module';

@Injectable({
  providedIn: 'root'
})
export class MyFirstModuleService {
  title = 'My first Module'

  constructor() { }
}
