import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameListService } from '../games-list/games-list.service';
import { Result } from '../model/GamesModel';

@Component({
  selector: 'app-games-detail',
  templateUrl: './games-detail.component.html',
  styleUrls: ['./games-detail.component.scss']
})
export class GamesDetailComponent implements OnInit {

  id:number  = 0
  games: any;
  constructor(private route: ActivatedRoute,private GameListService: GameListService) { 
    this.route.params.subscribe( params => {
      this.id = parseInt(params['id']);
    })
  }
  
  ngOnInit(): void {
    this.games = this.GameListService.getOneGame(this.id)
    // console.log(this.games)
  }
  

}
