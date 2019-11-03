import { Component, OnInit } from '@angular/core';
import {CartService} from "../../cart.service";
import {CartPosition, Product} from "../../product";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PaymentSystemsService} from "../../paymentsystems.service";
import {HttpClient} from "@angular/common/http";
import {PaymentSystem} from "../../payment_system";
import {ServerLocalesService} from "../../server-locales.service";
import {ConfigService} from "../../config.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  config;

  constructor(private http: HttpClient, private paymentSystemService: PaymentSystemsService, public cartService: CartService, private _formBuilder: FormBuilder, private configService: ConfigService) {
    this.fetchItems = this.fetchItems.bind(this);
    this.cleanCart = this.cleanCart.bind(this);

    this.configService.get()
      .then(r => {
        this.config = r;
      });
  }

  cartPositions: CartPosition[] = [];
  paymentSystems: PaymentSystem[] = [];

  totalPrice(): string {
    const prices = this.cartPositions.map(v => parseFloat(v.product.price) * v.quantity);
    return (prices || [0,0]).reduce((a, b) => (a + b), 0).toFixed(2);
  }

  ngOnInit() {
    this.paymentSystemService.getSystems()
      .then(res => this.paymentSystems = res);

    this.fetchItems();

    this.accountFromGroup = this._formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)],
      email: ['', Validators.email],
    });
    this.addressFormGroup = this._formBuilder.group({
      street: ['', Validators.required],
      house: ['', Validators.pattern('^[0-9]*$')],
      building: [''],
      apt: ['', Validators.pattern('^[0-9]*$')],
      city: ['', Validators.required],
      province: ['', Validators.required],
      country: ['', Validators.required],
      postcode: ['', Validators.required],
    });
    this.paymentFormGroup = this._formBuilder.group({
      paymentSystem: ['', Validators.required],
    });
  }

  fetchItems() {
    this.cartService.getCart()
      .then(res => {
        this.cartPositions = res;
      });
  }

  cleanCart() {
    this.cartService.setCart([])
      .then(res => this.fetchItems());
  }

  accountFromGroup: FormGroup;
  addressFormGroup: FormGroup;
  paymentFormGroup: FormGroup;

}
