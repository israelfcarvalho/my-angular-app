import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from 'src/app/views/product-list/product-list.component';
import { CartComponent } from 'src/app/views/cart/cart.component';
import { ProductDetailsComponent } from 'src/app/views/product-details/product-details.component';
import { ShippingComponent } from 'src/app/views/shipping/shipping.component';
import { productDetailsGuard } from 'src/app/utils/router/guards/product-details-guard';

const routes: Routes = [  
    {path: '', component: ProductListComponent},
    {path: 'products/:productId', component: ProductDetailsComponent, canActivate: [productDetailsGuard]},
    {path: 'cart', component: CartComponent},
    {path: 'shipping', component: ShippingComponent},
    { 
      path: 'my-first-module', 
      loadChildren: () => import('src/app/modules/my-first-module/my-first-module.module').then(m => m.MyFirstModuleModule)
    },
    { path: 'lazy-load-component-example', loadChildren: () => import('../lazy-load-component-example/lazy-load-component-example.module').then(m => m.LazyLoadComponentExampleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
