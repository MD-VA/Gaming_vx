import { Component, OnInit, VERSION } from '@angular/core';
import { Result, GamesModel } from '../model/GamesModel';
import { GameListService } from './games-list.service';
import { FormsModule } from '@angular/forms';
import {AppService} from "../app.service";

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  games!: Result[];
  public searchFilter: any = '';
  name = 'Angular ' + VERSION.major;
  selectedFilter = 'desc';
  selectedFilterName = '';

  constructor(private GameListService: GameListService, private AppService: AppService) {

    //get all the games from the Api
    // @ts-ignore
    this.AppService.getAllGamesApi().subscribe((gamesApi: GamesModel) => {
      console.log("the games api", gamesApi);
      // @ts-ignore
      this.games = gamesApi.results;
    });
  }

  ngOnInit() {
   }

logData() {
  console.log(this.games);
}

  selectChangeHandler (event: any) {
    //update the ui
    this.selectedFilter = event.target.value;
  }
  selectChangeHandlerName (event: any) {
    //update the ui
    this.selectedFilterName = event.target.value;
  }
}
