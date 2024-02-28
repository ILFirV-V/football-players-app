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
import { GenderTextPipe } from './pipes/gender-text.pipe';
import { FootballPlayerComponent } from './components/football-player/football-player.component';
import { PlayerEditComponent } from './components/player-edit/player-edit.component';
import { EditFootballPlayerPageComponent } from './pages/edit-football-player-page/edit-football-player-page.component';
import { PaginationComponent } from './components/UI/pagination/pagination.component';
import { FilterComponent } from './components/UI/filter/filter.component';
import { TeamAddComponent } from './components/team-add/team-add.component';


@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        PlayerAddComponent,
        AddingFootballPlayersPageComponent,
        ListFootballPlayersPageComponent,
        FootballPlayerComponent,
        GenderTextPipe,
        PlayerEditComponent,
        EditFootballPlayerPageComponent,
        PaginationComponent,
        FilterComponent,
        TeamAddComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
