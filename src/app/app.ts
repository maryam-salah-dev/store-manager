import { Component } from '@angular/core';
import { ProductService } from './services/product';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private productService: ProductService) {
    this.productService.getProducts();
  }
}