import { Component, OnInit } from '@angular/core';
import { Cart } from "../model/CartModel";
import { ActivatedRoute } from '@angular/router';
import { GameListService } from '../games-list/games-list.service';
import { Result } from '../model/GamesModel';
import { parseTemplate } from '@angular/compiler';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  cards?: Cart[];
  price?: Number = 0;

  constructor(private http: HttpClient) { }

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
