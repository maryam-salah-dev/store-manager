import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  // الأقسام اللي هنجيبها
  categories = ['smartphones', 'laptops', 'mobile-accessories'];

  products: Product[] = [];
  loading = false;
  error = '';

  constructor(private http: HttpClient) {}

  // جلب المنتجات من الـ API
  getProducts() {
    this.loading = true;
    this.error = '';
    this.products = [];

    let finished = 0;

    for (const cat of this.categories) {
      const url = 'https://dummyjson.com/products/category/' + cat + '?limit=12';

      this.http.get<any>(url).subscribe({
        next: (data) => {
          const items: Product[] = data.products.map((p: any) => ({
            id: p.id,
            title: p.title,
            price: p.price,
            description: p.description,
            category: p.category,
            image: p.thumbnail,
            quantity: p.stock
          }));
          this.products = [...this.products, ...items];
          finished++;
          if (finished === this.categories.length) {
            this.loading = false;
          }
        },
        error: () => {
          this.error = 'حصل خطأ في تحميل المنتجات';
          this.loading = false;
        }
      });
    }
  }

  // جلب منتج واحد بالـ id
  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }

  // إضافة منتج
  addProduct(product: Product) {
    product.id = Date.now();
    this.products.unshift(product);
  }

  // حذف منتج
  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}