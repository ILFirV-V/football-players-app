import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { TeamService } from '../../services/team.service';
import { ITeam } from '../../models/interfaces/request/team-interface';
import { Team } from '../../models/team';
import { take } from 'rxjs';

@Component({
  selector: 'app-team-add',
  templateUrl: `./team-add.component.html`,
  styleUrl: './team-add.component.scss'
})
export class TeamAddComponent {
    team: ITeam = new Team();
    isButtonDisabled: boolean = false;
    @Output() onChanged = new EventEmitter<boolean>();

    constructor(private teamService: TeamService) { }
    
    change() {
        this.onChanged.emit();
    }

    onSubmit() { 
        if (this.areFieldsFilled()) {
            this.isButtonDisabled = true;   
            this.teamService.addTeam(this.team).pipe(
              take(1)
            ).subscribe(
              response => 
              {
                this.change();
                this.team.name = "";
                console.log('Post request successful', response);
              },
              error => console.error('Error in post request', error)
          );
          setTimeout(() => {
            this.isButtonDisabled = false;
          }, 3000); // 3000 миллисекунд (3 секунды)
        } else {
            console.log('Please fill in all fields before submitting.');
        }
    }

    areFieldsFilled(): boolean {
        return !!this.team.name && !this.isButtonDisabled;
    }
}