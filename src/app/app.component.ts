import {Component, OnInit} from '@angular/core';
import {CartService} from "./cart.service";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {ServerLocalesService} from "./server-locales.service";
import {ServerLocale} from "./server_locale";
import {ConfigService} from "./config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loadingBarActive = true;

  locales: ServerLocale[] = [];
  config;

  constructor(public router: Router, public cartService: CartService, public localesService: ServerLocalesService, private configService: ConfigService) {
    window.addEventListener("loadingBarStart", () => {
      this.loadingBarActive = true;
    });

    window.addEventListener("loadingBarStop", () => {
      this.loadingBarActive = false;
    });

    this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          window.dispatchEvent(new Event("loadingBarStart"));
        }
        if(event instanceof NavigationEnd) {
          window.dispatchEvent(new Event("loadingBarStop"));
        }
      });
    this.configService.get()
      .then(r => {
        this.config = r;
      });
  }

  ngOnInit() {
    this.localesService.getLocales()
      .then(r => this.locales = r);
  }

  setLocale(id: number) {
    this.localesService.setLocale(id)
      .then(r => location.href = `/${r.locale}/`);
  }
}
