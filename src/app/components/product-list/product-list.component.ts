import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Pencil', price: 1.5, quantity: 1 },
    { id: 2, name: 'Notebook', price: 5.99, quantity: 1 },
    { id: 3, name: 'Backpack', price: 19.99, quantity: 1 }
  ];

  cart: Product[] = [];

  addToCart(product: Product) {
    const item = this.cart.find(p => p.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      this.cart.push({ ...product });
    }
  }
}
