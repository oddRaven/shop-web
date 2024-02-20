import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { IProduct } from '../models/product';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [ NgIf ],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss'
})
export class ProductCartComponent {
  @Input() product!: IProduct;

  constructor(private httpClient : HttpClient){}

  public addToCart(amount : number) {
    this.product.cartAmount += amount;

    let url = 'https://localhost:7250/api/product/' + this.product.id;

    this.httpClient
      .put<IProduct>(url, this.product)
      .subscribe(data => {
        this.product.cartAmount = data.cartAmount;
        this.product.storageAvailableAmount = data.storageAvailableAmount;
      });
  }
}
