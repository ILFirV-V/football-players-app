import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/UI/footer/footer.component';
import { HeaderComponent } from './components/UI/header/header.component';
import { PlayerAddComponent } from './components/player-add/player-add.component';
import { AddingFootballPlayersPageComponent } from './pages/adding-football-players-page/adding-football-players-page.component';
import { ListFootballPlayersPageComponent } from './pages/list-football-players-page/list-football-players-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TeamAddComponent } from './components/team-add/team-add.component';
import { FootballPlayerComponent } from './components/football-player/football-player.component';
import { FootballPlayerListComponent } from './components/football-player-list/football-player-list.component';
import { GenderTextPipe } from './pipes/gender-text.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PlayerAddComponent,
    AddingFootballPlayersPageComponent,
    ListFootballPlayersPageComponent,
    TeamAddComponent,
    FootballPlayerComponent,
    FootballPlayerListComponent,
    GenderTextPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
