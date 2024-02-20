import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { IProduct } from '../models/product';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-products-overview',
  standalone: true,
  imports: [ NgFor ],
  templateUrl: './products-overview.component.html',
  styleUrl: './products-overview.component.scss'
})
export class ProductsOverviewComponent implements OnInit {
  products: IProduct[] = [];

  constructor (private productService : ProductService) {}

  ngOnInit(): void {
    this.productService
      .getAll()
      .subscribe((data: IProduct[]) => {
        this.products = data;
      });
  }

  public goToDetail(id: number) {
    window.location.href = `/product/${id}`;
  }
}
