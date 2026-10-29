import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  storeName = 'PixelShop';
  slogan = 'Discover the future of technology';
  subtitle = 'Premium electronics, unbeatable prices, delivered to your door.';

  perks = [
    { title: 'Free Shipping', text: 'On all orders over $50' },
    { title: '2 Year Warranty', text: 'On every device we sell' },
    { title: 'Secure Payment', text: '100% protected checkout' },
    { title: '24/7 Support', text: 'We are always here to help' }
  ];

  categories = [
    { image: 'images/home.jpg', title: 'Smartphones', text: 'The latest flagship phones' },
    { image: 'images/laptop.webp', title: 'Laptops', text: 'Power for work and play' },
    { image: 'images/Headphone.webp', title: 'Headphones', text: 'Immersive sound, wireless freedom' }
  ];
}