import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Result } from 'src/app/model/GamesModel';

@Component({
  selector: 'app-games-card',
  templateUrl: './games-card.component.html',
  styleUrls: ['./games-card.component.scss']
})

export class GamesCardComponent implements OnInit{

  @Input() myGame!: Result
  constructor() { }
 

  ngOnInit(): void {
  }

}
