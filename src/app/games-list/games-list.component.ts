import { Component, OnInit } from '@angular/core';
import { Result } from '../model/GamesModel';
import { GameListService } from './games-list.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  games!: Result[]
  public searchFilter: any = '';

  constructor(private GameListService: GameListService) { }

  ngOnInit(): void {
    this.games = this.GameListService.getAllGames()
    console.log(this.games)
  }

}
