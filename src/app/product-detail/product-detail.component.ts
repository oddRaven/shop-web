import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { IProduct } from '../models/product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ CurrencyPipe ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  product? : IProduct;

  constructor(
    private route: ActivatedRoute, 
    private httpClient : HttpClient){
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const guid = routeParams.get('guid');

    if (guid == null) {
      window.location.href = '/';
    }

    this.httpClient
      .get<IProduct>(`https://localhost:7250/api/product/${guid}`)
      .subscribe((data: IProduct) => {
        this.product = data;
      });
  }
}
