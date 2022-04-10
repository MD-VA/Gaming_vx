import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(
    private http: HttpClient
  ) { }

   gameList: any;

  getAllGamesApi () {
      const  gamesData = this.http.get('http://localhost:8080/api/');
      return gamesData;
    }

  getCartDataApi () {
      const  cartData = this.http.get('http://localhost:8080/api/cart');
      return cartData;
    }

    addGameToCartApi (gamesData: any) {
      const  cartData = this.http.post('http://localhost:8080/api/cart', gamesData);
      return cartData;
    }

  getPriceQuantity () {
    const  data = this.http.get('http://localhost:8080/api/cart/total');
    return data;
  }
}
