import { Component, Input } from '@angular/core';
import { IFootballPlayerResponse } from '../../models/interfaces/response/player-interface-response';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-football-player-list',
  template: `
    <div>
      <h2>Football Players List</h2>
      <div *ngFor="let player of footballPlayers$ | async">
        <app-football-player [footballPlayer]="player"/>
      </div>
    </div>
  `,
  styleUrl: './football-player-list.component.scss'
})
export class FootballPlayerListComponent {
  @Input() footballPlayers$!: Observable<IFootballPlayerResponse[]>;
  
  private assertInputsProvided(): void {
    if (!this.footballPlayers$) {
      throw (new Error("The required input [footballPlayers] was not provided"));
    }
  }
  
  public ngOnInit(): void {
    this.assertInputsProvided();
  }
}