import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: any;

  brands = ["Todos", "Vegano", "Vegetariano", "Sem glúten"];
  selectedBrand = "Todos";
  loading = false;
  currentRate = 5;

  TYPE_VEGAN = "isVegan";
  TYPE_VEGETARIAN = "isVegetarian";
  TYPE_GLUTEN_FREE = "isGlutenFree";
  
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    console.warn("products " + this.products);
  }

  getProductByFilter(filter: string) {
    console.warn("filter " + filter);
    this.products = this.productService.getProductsByFilter(filter);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}