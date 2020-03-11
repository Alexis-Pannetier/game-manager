import { Injectable } from '@angular/core';
import { GAMES } from "./games-fake";
import { of } from 'rxjs';
import { VisitCounterService } from "./visit-counter.service";

@Injectable({
  providedIn: 'root'
})
export class GameFakeApiService {

  constructor() {
  }

  getAll() {
    this.tap();
    return of(GAMES);
  }

  tap() {
    new VisitCounterService().inc();
  }
}
