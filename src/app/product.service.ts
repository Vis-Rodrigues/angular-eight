import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { products } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  items = [] as any;
  product : any;

  constructor(
    private http: HttpClient
  ) {}

  getProducts() {
    return this.http.get<{name: string, price: number, description : string, id : number, imageUrl : string}[]>(environment.app_api_eight_shop + "/products");
    // return this.http.get<{name: string, price: number, description : string, id : number, imageUrl : string}[]>('/assets/products.json');
  }

  getProductById(id: number) {
    var url = environment.app_api_eight_shop + "/products/" + id;
    this.http.get(url).subscribe(responseData => {
      this.product = responseData;
    });
    return this.product;
  }

  getProductsByFilter(filter: string){
    return this.http.get<{name: string, price: number, description : string, id : number, imageUrl : string}[]>
                        (environment.app_api_eight_shop + "/products?" + filter + "=true");
    // return this.http.get<{name: string, price: number, description : string, id : number, imageUrl : string}[]>('/assets/products.json');
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
