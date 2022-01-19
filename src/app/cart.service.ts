import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [] as any;

  constructor(
    private http: HttpClient
  ) {}

  addToCart(product: any) {
    this.items.push(product);
  }

  getAllCarts(){
    return this.http.get(environment.app_api_eight_shop + "/carts");
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  sumOfPrice() {
    return this.items.reduce((sum: number, { price }: any) => sum + price, 0)
  }
  
}