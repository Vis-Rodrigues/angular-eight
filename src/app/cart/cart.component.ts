import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../services/cart/cart.service';
import { Product } from "../services/product/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  constructor(
    private cartService: CartService,
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.items = this.cartService.clearCart();
  }

  removeCartProduct(product: Product) {
    this.items.remove(product);
    // Recalling
    this.getCartProduct();
  }

  getCartProduct() {
    // this.cartProducts = this.productService.getLocalCartProducts();
  }

}