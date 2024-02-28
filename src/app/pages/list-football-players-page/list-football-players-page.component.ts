import { Component } from '@angular/core';
import { IFootballPlayerResponse } from '../../models/interfaces/response/player-interface-response';
import { PlayerService } from '../../services/players.service';
import { take } from 'rxjs';
import { SortOption } from '../../models/types/sort-option.type';
import { SortOrder } from '../../models/types/sort-order.type';

@Component({
    selector: 'app-list-football-players-page',
    templateUrl: `./list-football-players-page.component.html`,
    styleUrl: './list-football-players-page.component.scss'
})
export class ListFootballPlayersPageComponent {
    currentPage = 1;
    playersPerPage = 5;
    footballPlayers: IFootballPlayerResponse[] = [];
    allFootballPlayerssNotView: IFootballPlayerResponse[] = [];
    sortOption: SortOption = "id";
    sortOrder: SortOrder = "asc";
    searchValue: string = '';

    constructor(
        private playerService: PlayerService,
    ) { }

    ngOnInit(): void {
        this.playerService.getPlayers().pipe(
            take(1)
        ).subscribe((data) => {
            this.footballPlayers = data;
            this.allFootballPlayerssNotView = data;
            this.assertInputsProvided();
            this.loadProducts();
        });
    }

    private assertInputsProvided(): void {
        if (!this.footballPlayers) {
            throw (new Error("The required input [footballPlayers] was not provided"));
        }
    }

    onPageChange(page: number): void {
        this.currentPage = page;
    }
    loadProducts(): void {
        this.footballPlayers = this.playerService.sortByPlayers(this.footballPlayers, this.sortOption, this.sortOrder);
    }

    onSortOptionChanged(sortOption: SortOption): void {
        this.sortOption = sortOption;
        this.loadProducts();
    }

    onSortOrderChanged(sortOrder: SortOrder): void {
        this.sortOrder = sortOrder;
        this.loadProducts();
    }

    onSearch(searchValue: string): void {
        this.searchValue = searchValue;
        this.footballPlayers = this.allFootballPlayerssNotView.filter(player =>
            player.firstName.toLowerCase().includes(this.searchValue.toLowerCase()) ||
            player.lastName.toLowerCase().includes(this.searchValue.toLowerCase()) ||
            player.team.name.toLowerCase().includes(this.searchValue.toLowerCase()) ||
            player.country.name.toLowerCase().includes(this.searchValue.toLowerCase()));
        this.loadProducts();
    }
}
