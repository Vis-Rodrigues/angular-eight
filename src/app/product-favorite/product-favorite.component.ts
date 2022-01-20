import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { Product } from "../services/product/product";

@Component({
  selector: 'app-product-favorite',
  templateUrl: './product-favorite.component.html',
  styleUrls: ['./product-favorite.component.css']
})
export class ProductFavoriteComponent implements OnInit {
  productsFavorite = [] as any;
  showDataNotFound = true;

  // Not Found Message
  messageTitle = "No Favourite Products Found";
  messageDescription = "Please, choose your favourite products";

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getFavouriteProduct();
  }
  removeFavourite(product: Product) {
    this.productService.removeLocalFavourite(product);

    this.getFavouriteProduct();
  }

  getFavouriteProduct() {
    this.productsFavorite = [];
    // this.productsFavorite = this.productService.getLocalFavouriteProducts();
  }
}

