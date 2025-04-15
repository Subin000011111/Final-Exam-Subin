import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  standalone: true
})
export class ShoppingCartComponent {
  @Input() cart: Product[] = [];

  getTotal(): number {
    return this.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }
}
