import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../../services/players.service';
import { IFootballPlayerResponse } from '../../models/interfaces/response/player-interface-response';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-football-player-page',
  template: `
      <app-player-edit/>
  `,
  styleUrl: './edit-football-player-page.component.scss'
})
export class EditFootballPlayerPageComponent {
}
