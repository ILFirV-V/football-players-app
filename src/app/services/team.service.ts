import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ITeamResponse } from '../models/interfaces/response/team-interface-response';
import { ITeam } from '../models/interfaces/request/team-interface';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  url: string = `https://localhost:7039/teams`;

  constructor(private http: HttpClient) { }

  getTeams(): Observable<ITeamResponse[]> {
    return this.http.get<ITeamResponse[]>(`${this.url}`)
  }

  getTeamById(id: number): Observable<ITeamResponse> {
    return this.http.get<ITeamResponse>(`${this.url}/${id}`);
  }

  addTeam(team: ITeam): Observable<ITeam> {
    return this.http.post<ITeam>(`${this.url}`, team);
  }
}