import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IProduct } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiProductUrl : string = 'https://localhost:7250/api/product'

  constructor(private httpClient : HttpClient) { }

  public getAll() : Observable<IProduct[]> {
    return this.httpClient
      .get<IProduct[]>(this.apiProductUrl);
  }

  public get(id : number) : Observable<IProduct> {
    let url = `${this.apiProductUrl}/${id}`;

    return this.httpClient
      .get<IProduct>(url);
  }

  public update(product : IProduct) : Observable<IProduct> {
    let url = `https://localhost:7250/api/product/${product.id}`;

    return this.httpClient
      .put<IProduct>(url, product)
  }
}
