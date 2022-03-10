import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import gamesList from '../../data/gamesList.json';
import { Result } from '../model/GamesModel';
import { GamesListComponent } from './games-list.component';

@Injectable({providedIn: 'root'})

export class GameListService {
    constructor(private router: Router) { }
    games: Result[] = gamesList.results;

getAllGames(): Result[] {
    return this.games;
}
getOneGame(id: number)  {
    let game = this.games.find( (g) => g.id === id )
    if (!game) {
        this.router.navigate(['/'])
        return;
    }
    return game;
}
}

