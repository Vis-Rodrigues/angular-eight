import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts;
  products;

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {
    this.shippingCosts = this.cartService.getShippingPrices();
    this.products = this.productService.getProducts();
  }

  ngOnInit() {
  }

}