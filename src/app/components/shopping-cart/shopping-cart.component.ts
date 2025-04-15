import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  constructor(public cartService: CartService) {}

  removeItem(product: Product): void {
    this.cartService.removeFromCart(product);
  }

  increaseQuantity(product: Product): void {
    this.cartService.increaseQuantity(product);
  }

  decreaseQuantity(product: Product): void {
    this.cartService.decreaseQuantity(product);
  }
}
