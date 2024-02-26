import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddingFootballPlayersPageComponent } from './pages/adding-football-players-page/adding-football-players-page.component';
import { ListFootballPlayersPageComponent } from './pages/list-football-players-page/list-football-players-page.component';
import { EditFootballPlayerPageComponent } from './pages/edit-football-player-page/edit-football-player-page.component';

const routes: Routes = [
  {path: '', component: ListFootballPlayersPageComponent},
  {path: 'create', component: AddingFootballPlayersPageComponent},
  {path: 'edit/:id', component: EditFootballPlayerPageComponent},
/*   {path: 'product/:id', component: ProductDetailsComponent, resolve: {data: ProductResolver}},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'basket', component: BasketComponent},
  {path: '**', redirectTo: "", component: BaseComponent, pathMatch: 'full'}, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }