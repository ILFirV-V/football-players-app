import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SortOption } from '../models/types/sort-option.type';
import { SortOrder } from '../models/types/sort-order.type';
import { IFootballPlayerResponse } from '../models/interfaces/response/player-interface-response';
import { IFootballPlayer } from '../models/interfaces/request/football-player-interface';

@Injectable({
    providedIn: 'root'
})
export class PlayerService {
    url: string = `https://localhost:7024/players`;

constructor(private http: HttpClient) { }

getPlayers(): Observable<IFootballPlayerResponse[]> {
    return this.http.get<IFootballPlayerResponse[]>(`${this.url}`)
}

getPlayerById(id: number): Observable<IFootballPlayerResponse> {
    return this.http.get<IFootballPlayerResponse>(`${this.url}/${id}`);
}

addPlayer(player: IFootballPlayer): Observable<IFootballPlayerResponse> {
    return this.http.post<IFootballPlayerResponse>(`${this.url}`, player);
}

sortByPlayers(products: IFootballPlayerResponse[], sortOption: SortOption, sortOrder: SortOrder): IFootballPlayerResponse[]{
    const sortingOptions: { 
        [key: string]: (a: IFootballPlayerResponse, b: IFootballPlayerResponse) => number; } = {
            'id': (a:IFootballPlayerResponse, b: IFootballPlayerResponse) => a.id - b.id,
            'firstName': (a:IFootballPlayerResponse, b: IFootballPlayerResponse) => a.firstName.localeCompare(b.firstName),
            'lastName': (a:IFootballPlayerResponse, b: IFootballPlayerResponse) => a.lastName.localeCompare(b.lastName),
            'team': (a:IFootballPlayerResponse, b: IFootballPlayerResponse) => a.team.name.localeCompare(b.team.name),
            'country': (a:IFootballPlayerResponse, b: IFootballPlayerResponse) => a.country.name.localeCompare(b.country.name),
            'birthday': (a:IFootballPlayerResponse, b: IFootballPlayerResponse) => new Date(a.birthday).getTime() - new Date(b.birthday).getTime(),
        };

    const sortFunction = sortingOptions[sortOption];
    return products.sort((a, b) => sortOrder === "asc"
        ? sortFunction(a, b)
        : sortFunction(b, a));
   }
}