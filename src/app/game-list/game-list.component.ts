import { Component, OnInit } from '@angular/core';
import { GameFakeApiService } from "../service/game-fake-api.service";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})

export class GameListComponent implements OnInit {

  games;
  gameIsLoading = false;
  cardWidth = 500;

  ngOnInit() {
    new GameFakeApiService().getAll().subscribe(data => {
      setTimeout(() => {
        this.games = data;
        this.gameIsLoading = true;
      }, 2000)
    });
  }

  public handleButton(gameName, event) {
    alert("Jeux: " + gameName + " : " + event.target.innerText + " bouton cliqué.");
  }

  public handleCardSize(sign) {
    switch (sign) {
      case '+':
        this.cardWidth += 10;
        break;
      case '-':
        this.cardWidth -= 10;
        break;
      case '0':
        this.cardWidth = 500;
        break;
    }
  }

  public shortDescription(str) {
    if (str.split(' ').length <= 20) {
      return str;
    } else {
      return str.split(' ', 20).join(' ') + '...';
    }
  }

  public delete(id) {
    this.games.forEach((game, index) => {
      if (game.id = id) {
        this.games.slice(index);
      }
    });
  }

}
