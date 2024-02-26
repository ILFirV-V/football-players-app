import { Component } from '@angular/core';
import { IFootballPlayer } from '../../models/interfaces/request/football-player-interface';
import { Footballer } from '../../models/football-player';
import { CountryService } from '../../services/country.service';
import { TeamService } from '../../services/team.service';
import { PlayerService } from '../../services/players.service';
import { Observable } from "rxjs";
import { ITeamResponse } from '../../models/interfaces/response/team-interface-response';
import { ICountryResponse } from '../../models/interfaces/response/country-interface-response';

@Component({
    selector: 'app-player-add',
    templateUrl: './player-add.component.html',
    styleUrl: './player-add.component.scss'
})
export class PlayerAddComponent {
    footballer: IFootballPlayer = new Footballer();
    teams$: Observable<ITeamResponse[]> | undefined;
    countries$: Observable<ICountryResponse[]> | undefined;
    submitted = false;
    isViewAddTeam: boolean = false;

    constructor(
        private countryService: CountryService,
        private playerService: PlayerService,
        private teamService: TeamService,
    ) { }

    ngOnInit(): void {
        this.teams$ = this.teamService.getTeams();
        this.countries$ = this.countryService.getCountries();
    }

    onSubmit() { 
        if (!this.areFieldsFilled())
        {
            console.log('Please fill in all fields before submitting.');
            return;
        }
        this.submitted = true;   
        this.create(this.playerService);
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

    private create(playerService: PlayerService) {
        playerService.addPlayer(this.footballer).subscribe(
            response => 
            {
              this.footballer = new Footballer();
              console.log('Post request successful', response);
            },
            error => console.error('Error in post request', error)
        );
    }
}