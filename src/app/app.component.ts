import { Component, OnInit } from '@angular/core';
import { GameListService } from './games-list/games-list.service';
import { Result } from './model/GamesModel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private GameListService: GameListService) {

  }
  // games!: Result[]

  ngOnInit(){
    // this.games = this.GameListService.getAllGames()
    // console.log(this.games)
  }

}
