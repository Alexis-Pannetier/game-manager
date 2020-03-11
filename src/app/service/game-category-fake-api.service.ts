import { Injectable } from '@angular/core';
import { GAMECATEGORY } from "../service/game-category-fake";
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameCategoryFakeApiService {

  constructor() { }

  getAll() {
    return of(GAMECATEGORY);
  }

}
