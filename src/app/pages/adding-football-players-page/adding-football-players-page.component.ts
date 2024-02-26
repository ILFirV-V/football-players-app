import { Component } from '@angular/core';
import { IFootballPlayer } from '../../models/interfaces/request/football-player-interface';
import { Footballer } from '../../models/football-player';

@Component({
  selector: 'app-adding-football-players-page',
  template: `
    <app-player-add/>
  `,
  styleUrl: './adding-football-players-page.component.scss'
})
export class AddingFootballPlayersPageComponent {

}
