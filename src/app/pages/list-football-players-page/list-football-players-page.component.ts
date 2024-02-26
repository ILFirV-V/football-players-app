import { Component, Input } from '@angular/core';
import { IFootballPlayerResponse } from '../../models/interfaces/response/player-interface-response';
import { PlayerService } from '../../services/players.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-football-players-page',
  template: `
    <app-football-player-list [footballPlayers$] = "footballPlayers$" />
  `,
  styleUrl: './list-football-players-page.component.scss'
})
export class ListFootballPlayersPageComponent {
    footballPlayers$!: Observable<IFootballPlayerResponse[]>;
    constructor(
        private playerService: PlayerService,
    ) { }
    
    ngOnInit(): void {
        this.footballPlayers$ = this.playerService.getPlayers();
        this.assertInputsProvided();
    }
    private assertInputsProvided(): void {
      if (!this.footballPlayers$) {
        throw (new Error("The required input [footballPlayers] was not provided"));
      }
    }
}
