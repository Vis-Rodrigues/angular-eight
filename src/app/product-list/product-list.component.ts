import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: any;

  brands = ["Todos", "Vegano", "Vegetariano", "Sem glúten"];
  selectedBrand = "Todos";
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    console.warn("products " + this.products);
  }

  share() {
    window.alert('Muito obrigada pela preferência, é um prazer tê-lo aqui conosco! Seus itens estão sendo preparados e logo serão entregues. =D');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}