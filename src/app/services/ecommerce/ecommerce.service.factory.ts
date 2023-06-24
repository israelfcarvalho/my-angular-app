import { Injector } from '@angular/core'
import { EcommerceService } from './ecommerce.service'

export let EcommerceInjector: Injector

export function initializeEcommerceFactory(injector: Injector, ecommerceName?: 'isaac'){
    return function(){
        return new Promise((resolve) => {

            switch(ecommerceName){
                case 'isaac':
                    setTimeout(() => {
                        import('src/app/services/ecommerce/ecommerce-isaac.service').then(m => {
                            EcommerceInjector = Injector.create({
                                providers: [{provide: EcommerceService, useClass: m.EcommerceIsaacService}], 
                                parent: injector, 
                                name: 'ecommerceInjector'
                            })
    
                            resolve(true)
                        })
                    }, 3000);
                    break

                default: 
                setTimeout(() => {
                    EcommerceInjector = Injector.create({
                        providers: [{provide: EcommerceService}], 
                        parent: injector, 
                        name: 'ecommerceInjector'
                    })

                    resolve(true)
                }, 3000);
            }
        })
    }
}