import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/modules/shared/components/button/button.component';
import { LazyLoadDirective } from './lazy-load/lazy-load.directive';



@NgModule({
  declarations: [ButtonComponent, LazyLoadDirective],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent, LazyLoadDirective]
})
export class ComponentsModule { }
