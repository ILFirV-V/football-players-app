import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddingFootballPlayersPageComponent } from './pages/adding-football-players-page/adding-football-players-page.component';
import { ListFootballPlayersPageComponent } from './pages/list-football-players-page/list-football-players-page.component';
import { EditFootballPlayerPageComponent } from './pages/edit-football-player-page/edit-football-player-page.component';

const routes: Routes = [
    {path: '', component: ListFootballPlayersPageComponent},
    {path: 'create', component: AddingFootballPlayersPageComponent},
    {path: 'edit/:id', component: EditFootballPlayerPageComponent},
    {path: '**', redirectTo: "", component: ListFootballPlayersPageComponent, pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }