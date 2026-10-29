import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductList } from '../components/product-list/product-list';
import { ProductCard } from '../components/product-card/product-card';
import { ProductDetails } from '../components/product-details/product-details';
import { AddProduct } from '../components/add-product/add-product';
import { TruncatePipe } from '../pipes/truncate-pipe';

@NgModule({
  declarations: [ProductList, ProductCard, ProductDetails, AddProduct, TruncatePipe],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [ProductList, ProductCard, ProductDetails, AddProduct]
})
export class ProductsModule {}