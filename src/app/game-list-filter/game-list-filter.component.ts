import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list-filter',
  templateUrl: './game-list-filter.component.html',
  styleUrls: ['./game-list-filter.component.css']
})
export class GameListFilterComponent implements OnInit {

  filterNom;
  filterType;

  constructor() {
    this.filterType = [
      "Action",
      "Course",
      "Hack'n Slash",
      "Jeux de carte",
      "Stratégie"
    ];
  }
  ngOnInit() {

  }

}
