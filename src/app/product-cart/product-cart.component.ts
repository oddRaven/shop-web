import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

import { IProduct } from '../models/product';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [ NgIf ],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss'
})
export class ProductCartComponent {
  @Input() product!: IProduct;

  constructor(private productService : ProductService){}

  public addToCart(amount : number) {
    this.product.cartAmount += amount;

    this.productService
      .update(this.product)
      .subscribe(data => {
        this.product.cartAmount = data.cartAmount;
        this.product.storageAvailableAmount = data.storageAvailableAmount;
      });
  }
}
