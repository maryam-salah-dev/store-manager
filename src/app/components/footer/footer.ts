import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  storeName = 'PixelShop';
  year = new Date().getFullYear();

  contact = {
    phone: '+20 100 000 0000',
    email: 'info@pixelshop.com',
    address: 'Cairo, Egypt'
  };
}