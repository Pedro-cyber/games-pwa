import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { GamesComponent } from './components/games/games.component';

const routes: Routes = [
  { path:'', component: GamesComponent},
  { path:'game/:id', component: GameComponent},
  { path:'**', component: GamesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
