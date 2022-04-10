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
import { OrderByPipe } from './pipe/order-by.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GamesDetailComponent } from './games-detail/games-detail.component';
import { AboutComponent } from './about/about.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTabsModule} from "@angular/material/tabs";
import {HttpClientModule} from "@angular/common/http";
import { GamesCartComponent } from './components/games-cart/games-cart.component';
import { CartCardComponent } from './cart-card/cart-card.component';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    GamesCardComponent,
    sortByDatePipe,
    SearchFilterPipe,
    OrderByPipe,
    HeaderComponent,
    FooterComponent,
    GamesDetailComponent,
    AboutComponent,
    GamesCartComponent,
    CartCardComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatToolbarModule,
    MatTabsModule,
    HttpClientModule,
  ],
  exports: [
    sortByDatePipe,
    SearchFilterPipe,
    FormsModule,
    OrderByPipe

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
