import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { products } from './product-mock';
import { Product } from './product';


const urlBase = environment.baseUrl.concat("/products");

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
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let httpOptions = {
      headers: headers
    };

    return this.http.get<Array<Product>>(urlBase, httpOptions)
      .pipe(map(data => {
        return data;
      }));

    // return this.http.get<{name: string, price: number, description : string, id : number, imageUrl : string}[]>(environment.app_api_eight_shop + "/products");
    // return this.http.get<{name: string, price: number, description : string, id : number, imageUrl : string}[]>(environment.app_api_eight_shop + "/products");
    // return this.http.get<{name: string, price: number, description : string, id : number, imageUrl : string}[]>('/assets/products.json');
  }

  getProductById(id: string) {
    let url = urlBase.concat("/").concat(id);
    console.warn("url " + url);
    return this.http.get(url)
      .pipe(map(data => {
        console.warn("data: " + data)
        return data;
    }));
  }

  getProductsByFilter(filter: string){
    return this.http.get<{name: string, price: number, description : string, id : number, imageUrl : string}[]>
                        (urlBase.concat("?").concat(filter).concat("=true"));
    // return this.http.get<{name: string, price: number, description : string, id : number, imageUrl : string}[]>('/assets/products.json');
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
