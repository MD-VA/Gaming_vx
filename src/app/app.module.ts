import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import localFr from '@angular/common/locales/fr';
registerLocaleData(localFr);
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesListComponent } from './games-list/games-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GamesCardComponent } from './games-list/games-card/games-card.component';
import { registerLocaleData } from '@angular/common';
import { sortByDatePipe } from './pipes/games.pipe';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    GamesCardComponent,
    sortByDatePipe,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule

  ],
  exports: [
    sortByDatePipe,
    SearchFilterPipe,
    FormsModule

  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
