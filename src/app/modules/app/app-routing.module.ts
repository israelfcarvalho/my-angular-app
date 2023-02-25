import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from 'src/app/views/product-list/product-list.component';
import { CartComponent } from 'src/app/views/cart/cart.component';
import { ProductDetailsComponent } from 'src/app/views/product-details/product-details.component';
import { ShippingComponent } from 'src/app/views/shipping/shipping.component';

const routes: Routes = [  
    {path: '', component: ProductListComponent},
    {path: 'products/:productId', component: ProductDetailsComponent},
    {path: 'cart', component: CartComponent},
    {path: 'shipping', component: ShippingComponent},
    { 
      path: 'my-first-module', 
      loadChildren: () => import('src/app/modules/my-first-module/my-first-module.module').then(m => m.MyFirstModuleModule) 
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
