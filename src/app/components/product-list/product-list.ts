import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    if (this.productService.products.length === 0) {
      this.productService.getProducts();
    }
  }

  onDelete(id: number) {
    this.productService.deleteProduct(id);
  }
}