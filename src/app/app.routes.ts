import { Routes } from '@angular/router';

import { ProductsOverviewComponent } from './products-overview/products-overview.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Products overview',
        component: ProductsOverviewComponent
    },
    {
        path: 'product/:id',
        title: 'Product detail',
        component: ProductDetailComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
