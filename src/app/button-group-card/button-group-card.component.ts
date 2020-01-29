import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-group-card',
  templateUrl: './button-group-card.component.html',
  styleUrls: ['./button-group-card.component.css']
})
export class ButtonGroupCardComponent implements OnInit {

  @Input() gameName: string;
  @Output() click = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  public handleAlert(e: string) {
    this.click.emit(e);
    alert("Jeux: " + this.gameName + " : " + e + " bouton cliqué.");
  }

}
