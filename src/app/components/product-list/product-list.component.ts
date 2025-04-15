import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Naruto Vol. 1', price: 9.99 },
    { id: 2, name: 'One Piece Vol. 1', price: 10.99 },
    { id: 3, name: 'Attack on Titan Vol. 1', price: 11.99 }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
