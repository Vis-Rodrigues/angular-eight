import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-not-found',
  templateUrl: './product-not-found.component.html',
  styleUrls: ['./product-not-found.component.css']
})
export class ProductNotFoundComponent implements OnInit {

   // tslint:disable-next-line:no-input-rename
   @Input("title") title: any;
   // tslint:disable-next-line:no-input-rename
   @Input("description") description: any;
   constructor() {}
 
   ngOnInit() {}

}
