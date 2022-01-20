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

  /*
   ----------  Favourite Product Function  ----------
  */

  // Get Favourite Product based on userId
  async getUsersFavouriteProduct() {
    // const user = await this.authService.user$.toPromise();
    // this.favouriteProducts = this.db.list("favouriteProducts", (ref) =>
    //   ref.orderByChild("userId").equalTo(user.$key)
    // );
    // return this.favouriteProducts;
    return new Promise((res, rej) => {
      res([]);
    });
  }

  // Adding New product to favourite if logged else to localStorage
  addFavouriteProduct(data: Product): void {
    // const a: Product[] = JSON.parse(localStorage.getItem("avf_item")) || [];
    // a.push(data);
    // this.toastrService.wait("Adding Product", "Adding Product as Favourite");
    // setTimeout(() => {
    //   localStorage.setItem("avf_item", JSON.stringify(a));
    // }, 1500);
  }

  // Fetching unsigned users favourite proucts
  getLocalFavouriteProducts() {
    // const products: Product[] =
    //   JSON.parse(localStorage.getItem("avf_item")) || [];

    // return products;
  }

  // Removing Favourite Product from Database
  removeFavourite(key: string) {
    // this.favouriteProducts.remove(key);
  }

  // Removing Favourite Product from localStorage
  removeLocalFavourite(product: Product) {
    // const products: Product[] = JSON.parse(localStorage.getItem("avf_item"));

    // for (let i = 0; i < products.length; i++) {
    //   if (products[i].productId === product.productId) {
    //     products.splice(i, 1);
    //     break;
    //   }
    // }
    // // ReAdding the products after remove
    // localStorage.setItem("avf_item", JSON.stringify(products));
  }

}
