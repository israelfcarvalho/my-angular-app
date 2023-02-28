import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";
import { map } from "rxjs";
import { ProductService } from "src/app/services/product/product.service";

export const productDetailsGuard: CanActivateFn = function(route){
    const productIdParam = Number.parseInt(route.paramMap.get('productId') || '')
    const productId =  Number.isNaN(productIdParam)  ? -1 : productIdParam
    const productService = inject(ProductService)

    return productService.getById(productId).pipe(map(product => !!product))
}