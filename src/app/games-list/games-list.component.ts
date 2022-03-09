import { Component, OnInit, VERSION } from '@angular/core';
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
  name = 'Angular ' + VERSION.major;
  selectedFilter = 'desc';
  selectedFilterName = '';

  constructor(private GameListService: GameListService) { }

  ngOnInit(): void {
    this.games = this.GameListService.getAllGames()
    console.log(this.games)
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
