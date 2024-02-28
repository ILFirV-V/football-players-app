import { Component, Input } from '@angular/core';
import { IFootballPlayerResponse } from '../../models/interfaces/response/player-interface-response';
import { PlayerService } from '../../services/players.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-football-players-page',
  template: `
    <app-football-player-list/>
  `,
  styleUrl: './list-football-players-page.component.scss'
})
export class ListFootballPlayersPageComponent {

}
