import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ICountryResponse } from '../models/interfaces/response/country-interface-response';

@Injectable({
    providedIn: 'root'
})
export class CountryService {
    url: string = `https://localhost:7024/countries`;

    constructor(private http: HttpClient) { }

    getCountries(): Observable<ICountryResponse[]> {
        return this.http.get<ICountryResponse[]>(`${this.url}`)
    }

    getCountryById(id: number): Observable<ICountryResponse> {
        return this.http.get<ICountryResponse>(`${this.url}/${id}`);
    }
}