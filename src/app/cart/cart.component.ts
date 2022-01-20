import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  closeBuy() {
    this.cartService.clearCart();
    window.alert('Muito obrigada pela preferência, é um prazer tê-lo aqui conosco! Seus itens estão sendo preparados e logo serão entregues. =D');
    this.reloadCurrentPage();
  }

  sumOfPrice(){
    return this.cartService.sumOfPrice();
  }

  reloadCurrentPage() {
    window.location.reload();
   }

}