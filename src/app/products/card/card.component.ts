import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../product";
import {CartService} from "../../cart.service";

@Component({
  selector: 'product-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;
  @Input() currency: string;

  addedToTheCart: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    if (this.cartService.getCount(this.product) > 0) {
      this.addedToTheCart = true;
    }
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.addedToTheCart = true;
  }

  amountAvailable() {
    return parseInt(this.product.available);
  }

}
