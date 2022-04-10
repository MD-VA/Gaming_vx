import { Component, OnInit } from '@angular/core';
import { Cart } from "../model/CartModel";
import { ActivatedRoute } from '@angular/router';
import { GameListService } from '../games-list/games-list.service';
import { Result } from '../model/GamesModel';
import { parseTemplate } from '@angular/compiler';
import { HttpClient } from "@angular/common/http";
import {AppService} from "../app.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  cards?: Cart[];
  price?: Number = 0;
  cartPriceQuantity?: {price: number, quantity: number};

  constructor(private http: HttpClient, private appService: AppService) {
    // @ts-ignore
    this.appService.getPriceQuantity(). subscribe((res: [{price: number, quantity: number}]) => {
        this.cartPriceQuantity = res[0];
        },
        (error: any) => {
        console.log(error);
      });
  }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/api/cart').subscribe(data => {
      this.cards = data;
    });
    this.http.get<any>('http://localhost:8080/api/totalprice').subscribe(data => {
      console.warn(this.price);
    });
    console.warn(this.price);
  }

}
