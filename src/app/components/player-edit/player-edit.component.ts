import { Component } from '@angular/core';
import { IFootballPlayerResponse } from '../../models/interfaces/response/player-interface-response';
import { Observable, map, switchMap } from 'rxjs';
import { ITeamResponse } from '../../models/interfaces/response/team-interface-response';
import { ICountryResponse } from '../../models/interfaces/response/country-interface-response';
import { CountryService } from '../../services/country.service';
import { PlayerService } from '../../services/players.service';
import { TeamService } from '../../services/team.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IFootballPlayer } from '../../models/interfaces/request/football-player-interface';
import { Footballer } from '../../models/football-player';
import { Location } from '@angular/common';

@Component({
    selector: 'app-player-edit',
    templateUrl: './player-edit.component.html',
    styleUrl: './player-edit.component.scss'
})
export class PlayerEditComponent {
    footballer: IFootballPlayerResponse | IFootballPlayer = new Footballer();
    teams$?: Observable<ITeamResponse[]>;
    countries$?: Observable<ICountryResponse[]>;
    submitted = false;
    isViewAddTeam: boolean = false;

    constructor(
        private countryService: CountryService,
        private playerService: PlayerService,
        private teamService: TeamService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,
    ){}

    ngOnInit(): void {
        this.teams$ = this.teamService.getTeams();
        this.countries$ = this.countryService.getCountries();
        this.getPlayer();
    }

    onSubmit() { 
        if (!this.areFieldsFilled())
        {
            console.log('Please fill in all fields before submitting.');
            return;
        }
        this.edit();
    }

    areFieldsFilled(): boolean {
        return !!this.footballer.firstName 
            && !!this.footballer.lastName 
            && !!this.footballer.teamId 
            && !!this.footballer.countryId 
            && !!this.footballer.birthday 
            && !!this.footballer.gender;
    }

    onChanged() {
        this.teams$ = this.teamService.getTeams();
        this.onChangedAddTeam();
    }

    onChangedAddTeam() {
        this.isViewAddTeam = !this.isViewAddTeam;
    }

    private edit() {
        if (!('id' in this.footballer)) {
          console.error('a football player has no id');
          return;
        } 
        this.playerService.updatePlayer(this.footballer).subscribe(
            response => console.log('Update request successful', response),
            error => console.error('Error in update request', error),
        );
    }

    private getPlayer(){
        this.route.params
          .pipe(
            map(params => params['id']),
            switchMap(id => this.playerService.getPlayerById(id))
          )
          .subscribe(
            response => this.footballer = response,
            error => {
              console.error('Error in get request', error);
              if(error.status === 404) {
                this.router.navigate(['/']);
              }
            }
          );
    }

    goBack(): void {
        this.location.back();
    }
}