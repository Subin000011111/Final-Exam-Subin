import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  getCart(): Product[] {
    return this.cart;
  }

  addToCart(product: Product): void {
    const existing = this.cart.find(p => p.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({ ...product });
    }
  }

  removeFromCart(product: Product): void {
    this.cart = this.cart.filter(p => p.id !== product.id);
  }

  increaseQuantity(product: Product): void {
    const item = this.cart.find(p => p.id === product.id);
    if (item) item.quantity += 1;
  }

  decreaseQuantity(product: Product): void {
    const item = this.cart.find(p => p.id === product.id);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
    }
  }

  getSubtotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  getTax(): number {
    return this.getSubtotal() * 0.13;
  }

  getTotal(): number {
    return this.getSubtotal() + this.getTax();
  }
}
