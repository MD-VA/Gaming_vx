import { Injectable } from '@angular/core';
import gamesList from '../../data/gamesList.json';
import { Result } from '../model/GamesModel';

@Injectable({providedIn: 'root'})

export class GameListService {
    constructor() { }
    games: Result[] = gamesList.results;

getAllGames(): Result[] {
    return this.games;
}
}

