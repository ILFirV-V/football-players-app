import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ITeamResponse } from '../models/interfaces/response/team-interface-response';
import { ITeam } from '../models/interfaces/request/team-interface';
import { API_URL } from './constants';

@Injectable({
    providedIn: 'root'
})
export class TeamService {
    url: string = `${API_URL}/teams`;

    constructor(private http: HttpClient) { }

    getTeams(): Observable<ITeamResponse[]> {
        return this.http.get<ITeamResponse[]>(`${this.url}`)
    }

    getTeamById(id: number): Observable<ITeamResponse> {
        return this.http.get<ITeamResponse>(`${this.url}/${id}`);
    }

    addTeam(team: ITeam): Observable<ITeam> {
        return this.http.post<ITeam>(`${this.url}/add`, team);
    }
}