import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ProductCartComponent } from '../product-cart/product-cart.component';
import { IProduct } from '../models/product';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ CurrencyPipe, ProductCartComponent ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  product? : IProduct;

  constructor(
    private route: ActivatedRoute, 
    private productService : ProductService){
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = routeParams.get('id');

    if (id == null || isNaN(parseInt(id))) {
      window.location.href = '/';
    }

    const productId: number = parseInt(id!);

    this.productService
      .get(productId)
      .subscribe((data: IProduct) => this.product = data);
  }
}
