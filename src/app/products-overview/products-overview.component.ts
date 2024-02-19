import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { IProduct } from '../models/product';

@Component({
  selector: 'app-products-overview',
  standalone: true,
  imports: [ NgFor ],
  templateUrl: './products-overview.component.html',
  styleUrl: './products-overview.component.scss'
})
export class ProductsOverviewComponent implements OnInit {
  products: IProduct[] = [];

  constructor (private httpClient : HttpClient) {}

  ngOnInit(): void {
    this.httpClient
      .get<IProduct[]>("https://localhost:7250/api/product")
      .subscribe((data: IProduct[]) => {
        this.products = data;
      });
  }

  public goToDetail(guid: string) {
    window.location.href = `/product/${guid}`;
  }
}
