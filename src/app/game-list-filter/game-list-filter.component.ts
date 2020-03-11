import { Component, OnInit } from '@angular/core';
import { GameCategoryFakeApiService } from "../service/game-category-fake-api.service";

@Component({
  selector: 'app-game-list-filter',
  templateUrl: './game-list-filter.component.html',
  styleUrls: ['./game-list-filter.component.css']
})
export class GameListFilterComponent implements OnInit {

  gameTypeOptions;

  constructor() {
  }

  ngOnInit() {
    new GameCategoryFakeApiService().getAll().subscribe(data => { setTimeout(() => { this.gameTypeOptions = data }, 2000) });
  }

}