import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../model/GamesModel';

@Pipe({
    name: 'sortByDate'
})

export class sortByDatePipe implements PipeTransform {
    transform(games: Result[]) {
        return games.sort((a,b) => { return new Date(b.released).getTime() - new Date(a.released).getTime()})
    }
}