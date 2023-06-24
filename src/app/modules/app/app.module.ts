import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from 'src/app/modules/app/app-routing.module';
import { AppComponent } from 'src/app/modules/app/app.component';
import { TopBarComponent } from 'src/app/components/top-bar/top-bar.component';
import { ProductListComponent } from 'src/app/views/product-list/product-list.component';
import { ProductAlertsComponent } from 'src/app/components/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from 'src/app/views/product-details/product-details.component';
import { CartComponent } from 'src/app/views/cart/cart.component';
import { ShippingComponent } from 'src/app/views/shipping/shipping.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/modules/components/components.module';
import { ClassNamePipe } from '../../pipes/class-name.pipe';
import { initializeEcommerceFactory } from 'src/app/services/ecommerce/ecommerce.service.factory';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    ClassNamePipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (injector: Injector) => initializeEcommerceFactory(injector, 'isaac'),
      deps: [Injector],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }