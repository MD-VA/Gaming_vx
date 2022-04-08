import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GamesDetailComponent } from './games-detail/games-detail.component';
import { GamesListComponent } from './games-list/games-list.component';
import {GamesCartComponent} from "./components/games-cart/games-cart.component";

const routes: Routes = [
  {path: '', component: GamesListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'cart', component: GamesCartComponent},
  {path: 'games/:id', component: GamesDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
