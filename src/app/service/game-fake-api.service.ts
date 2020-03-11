import { Injectable } from '@angular/core';
import { GAMES } from "./games-fake";
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameFakeApiService {

  constructor() { }

  getAll() {
    return of(GAMES);
  }
}
