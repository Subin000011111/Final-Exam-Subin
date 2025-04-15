import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Naruto Vol. 1', price: 9.99, quantity: 1 },
    { id: 2, name: 'One Piece Vol. 1', price: 10.99, quantity: 1 },
    { id: 3, name: 'Attack on Titan Vol. 1', price: 11.99, quantity: 1 }
  ];

  constructor(public cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
