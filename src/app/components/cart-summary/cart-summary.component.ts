import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
  standalone: true
})
export class CartSummaryComponent {
  @Input() cart: Product[] = [];
}
