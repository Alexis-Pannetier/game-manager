import { Component, OnInit } from '@angular/core';
import { GameTypeEnum } from '../game-type-enum/game-type-enum.component';

@Component({
  selector: 'app-game-list-filter',
  templateUrl: './game-list-filter.component.html',
  styleUrls: ['./game-list-filter.component.css']
})
export class GameListFilterComponent implements OnInit {

  gameType = GameTypeEnum;
  gameTypeOptions = [];

  constructor() {
  }

  ngOnInit() {
    this.gameTypeOptions = Object.keys(this.gameType);
  }

}
