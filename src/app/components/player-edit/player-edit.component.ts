import { Component, Input } from '@angular/core';
import { IFootballPlayerResponse } from '../../models/interfaces/response/player-interface-response';
import { Observable } from 'rxjs';
import { ITeamResponse } from '../../models/interfaces/response/team-interface-response';
import { ICountryResponse } from '../../models/interfaces/response/country-interface-response';
import { CountryService } from '../../services/country.service';
import { PlayerService } from '../../services/players.service';
import { TeamService } from '../../services/team.service';
import { ActivatedRoute } from '@angular/router';
import { Footballer } from '../../models/football-player';

@Component({
    selector: 'app-player-edit',
    templateUrl: './player-edit.component.html',
    styleUrl: './player-edit.component.scss'
})
export class PlayerEditComponent {
    footballer!: IFootballPlayerResponse;
    teams$?: Observable<ITeamResponse[]>;
    countries$?: Observable<ICountryResponse[]>;
    submitted = false;
    isViewAddTeam: boolean = false;

    constructor(
        private countryService: CountryService,
        private playerService: PlayerService,
        private teamService: TeamService,
        private route: ActivatedRoute,
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
        this.edit(this.playerService);
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

    private edit(playerService: PlayerService) {
        playerService.updatePlayer(this.footballer).subscribe(
            response => 
            {
              console.log('Update request successful', response);
            },
            error => console.error('Error in update request', error)
        );
    }

    private getPlayer(){
        this.route.params.subscribe(params => {
            const id = params['id'];
            this.playerService.getPlayerById(id).subscribe(
                response => this.footballer = response,
                error => console.error('Error in post request', error)
            );
        });
    }
}