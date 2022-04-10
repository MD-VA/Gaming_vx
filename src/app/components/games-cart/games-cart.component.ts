import { Component, OnInit } from '@angular/core';
import { AppService } from "../../app.service";
import { Cart } from "../../model/CartModel";

@Component({
  selector: 'app-games-cart',
  templateUrl: './games-cart.component.html',
  styleUrls: ['./games-cart.component.scss']
})
export class GamesCartComponent implements OnInit {

  cartData?: Cart[];

  constructor(private appService: AppService) {
    // @ts-ignore
    this.appService.getCartDataApi().subscribe((res: Cart[]) => {
      this.cartData = res;
      this.cartData.forEach(elem => {
        console.log(elem.name);
      })
    },
      error => {
        console.log(error);
      });
  }

  ngOnInit(): void {
    console.warn(this.cartData);
  }

}
