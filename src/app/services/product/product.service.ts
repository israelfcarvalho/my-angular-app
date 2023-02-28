import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Product } from 'src/app/entities/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClientService: HttpClient) { }

  getAll(){
    return this.httpClientService.get<Array<Product>>('assets/products.json')
  }

  getById(id: number){
    return this.httpClientService.get<Array<Product>>('assets/products.json')
      .pipe(map(products => products.find(product => product.id === id)))
  }
}
