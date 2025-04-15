import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  constructor(public cartService: CartService) {}

  removeItem(product: Product) {
    this.cartService.removeFromCart(product);
  }

  increaseQuantity(product: Product) {
    this.cartService.increaseQuantity(product);
  }

  decreaseQuantity(product: Product) {
    this.cartService.decreaseQuantity(product);
  }
}
