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

  increase(product: Product) {
    this.cartService.increaseQuantity(product);
  }

  decrease(product: Product) {
    this.cartService.decreaseQuantity(product);
  }

  removeItem(product: Product) {
    this.cartService.removeFromCart(product);
  }
}
