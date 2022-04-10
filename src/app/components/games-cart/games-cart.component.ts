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
  cartPriceQuantity?: {price: number, quantity: number};

  constructor(private appService: AppService) {
    // @ts-ignore
    this.appService.getCartDataApi().subscribe((res: Cart[]) => {
      this.cartData = res;
      this.cartData.forEach(elem => {
        console.log(elem.price);
      })
    },
      error => {
        console.log(error);
      });

    // @ts-ignore
    this.appService.getPriceQuantity(). subscribe((res: [{price: number, quantity: number}]) => {
      this.cartPriceQuantity = res[0];},
      error => {
        console.log(error);
      });
  }

  ngOnInit(): void {
    console.warn(this.cartData);
  }

}
