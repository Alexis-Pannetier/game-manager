import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameListFilterComponent } from './game-list-filter/game-list-filter.component';
import { ButtonGroupCardComponent } from './button-group-card/button-group-card.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameListFilterComponent,
    ButtonGroupCardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
