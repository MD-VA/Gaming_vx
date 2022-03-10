import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GamesDetailComponent } from './games-detail/games-detail.component';
import { GamesListComponent } from './games-list/games-list.component';

const routes: Routes = [
  {path: '', component: GamesListComponent},
  {path: 'games/:id', component: GamesDetailComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
