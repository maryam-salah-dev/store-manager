import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  categories = ['smartphones', 'laptops', 'mobile-accessories'];
  products: Product[] = [];
  loading = false;
  error = '';

  constructor(private http: HttpClient) {}

  getProducts() {
    if (this.products.length > 0 || this.loading) return;

    this.loading = true;
    this.error = '';
    let done = 0;

    for (const cat of this.categories) {
      const url = `https://dummyjson.com/products/category/${cat}?limit=8&select=id,title,price,description,category,thumbnail,stock`;

      this.http.get<any>(url).subscribe({
        next: d => {
          const items = d.products.map((p: any) => ({
            id: p.id, title: p.title, price: p.price, description: p.description,
            category: p.category, image: p.thumbnail, quantity: p.stock
          }));
          this.products = [...this.products, ...items];
          if (++done === this.categories.length) this.loading = false;
        },
        error: () => {
          this.error = 'حصل خطأ في تحميل المنتجات';
          this.loading = false;
        }
      });
    }
  }

  getProductById(id: number) { return this.products.find(p => p.id === id); }
  addProduct(p: Product) { p.id = Date.now(); this.products.unshift(p); }
  deleteProduct(id: number) { this.products = this.products.filter(p => p.id !== id); }
}