import { Gender } from "../../enums/gender.enum";
import { ICountryResponse } from "./country-interface-response";
import { ITeamResponse } from "./team-interface-response";

export interface IFootballPlayerResponse {
    id: number,
    firstName: string,
    lastName: string,
    gender: Gender,
    birthday: Date,
    team: ITeamResponse,
    country: ICountryResponse,
}
