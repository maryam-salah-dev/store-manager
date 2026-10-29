import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public productService: ProductService
  ) {}

  ngOnInit(): void {
    // قراءة الـ id من الرابط
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.product = this.productService.getProductById(id);

    // لو المستخدم عمل Refresh على الصفحة، القايمة بتبقى فاضية فنجيبها من جديد
    if (!this.product) {
      this.productService.getProducts();
    }
  }

  goBack() {
    this.router.navigate(['/products']);
  }
}