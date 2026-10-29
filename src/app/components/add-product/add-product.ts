import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct {
  product: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: 'smartphones',
    image: '',
    quantity: 1
  };

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  onSubmit() {
    // لو مفيش صورة، نحط صورة افتراضية
    if (!this.product.image) {
      this.product.image = 'images/PixelShop.png';
    }

    this.productService.addProduct({ ...this.product });
    this.router.navigate(['/products']);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.product.image = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}