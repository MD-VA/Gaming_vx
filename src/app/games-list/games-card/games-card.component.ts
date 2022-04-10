import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/model/GamesModel';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-games-card',
  templateUrl: './games-card.component.html',
  styleUrls: ['./games-card.component.scss']
})

export class GamesCardComponent implements OnInit {

  @Input() myGame!: Result

  price: number = Math.floor(Math.random() * (60 - 40 + 1)) + 40;
  constructor(private http: HttpClient) { }
  quantity = 0;

  public addToCard() {
    this.http.post<any>('http://localhost:8080/api/games', {
      name: this.myGame.name,
      type: this.myGame.genres,
      quantity: this.quantity,
      fav: false,
      price: this.price,
      date: 999,
    }).subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit(): void {
    /*
    {
    "name" : "testGame",
    "type" : "type",
    "fav" : true,
    "date": 12
}
    */
  }

}
