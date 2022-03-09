import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../model/GamesModel';

@Pipe({
    name: 'sortByDate'
})

export class sortByDatePipe implements PipeTransform {
    transform(games: Result[], order?: any) {
        let desc = !(order && order === 'asc');
        return games.sort((a,b) => { 
            if(desc) return new Date(b.released).getTime() - new Date(a.released).getTime()
            else return new Date(a.released).getTime() - new Date(b.released).getTime()
        })
    }
}