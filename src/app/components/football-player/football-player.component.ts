import { Component, Input } from '@angular/core';
import { IFootballPlayerResponse } from '../../models/interfaces/response/player-interface-response';

@Component({
  selector: 'app-football-player',
  template: `
    <div class="football-player">
      <p>Имя: {{ footballPlayer.firstName }}</p>
      <p>Фамилия: {{ footballPlayer.lastName }}</p>
      <p>Пол: {{ footballPlayer.gender | genderText }}</p>
      <p>Дата рождения: {{ footballPlayer.birthday | date:'dd.MM.yyyy' }}</p>
      <p>Команда: {{ footballPlayer.team.name }}</p>
      <p>Страна: {{ footballPlayer.country.name }}</p>
      <a routerLink="/edit/{{footballPlayer.id}}">Редактировать</a>
    </div>
  `,
  styleUrl: './football-player.component.scss'
})
export class FootballPlayerComponent {
  @Input() footballPlayer!: IFootballPlayerResponse;

  editPlayer() {
    // Здесь можно добавить логику для редактирования футболиста
    console.log('Edit player', this.footballPlayer);
  }

  private assertInputsProvided(): void {
    if (!this.footballPlayer) {
      throw (new Error("The required input [footballPlayer] was not provided"));
    }
  }
  
  public ngOnInit(): void {
    this.assertInputsProvided();
  }
}
