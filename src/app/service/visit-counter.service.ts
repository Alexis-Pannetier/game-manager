import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitCounterService {

  constructor() {
  }

  inc() {
    var n = parseInt(localStorage.getItem('counter'));
    if (!n) {
      n = 0;
    }
    n++;
    console.log(n);
    localStorage.setItem("counter", n.toString());
  }

}
