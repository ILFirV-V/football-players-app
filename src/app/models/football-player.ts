import { IFootballPlayer } from "./interfaces/request/football-player-interface";
import { Gender } from "./enums/gender.enum";


export class Footballer implements IFootballPlayer  {
    firstName: string = "";
    lastName: string = "";
    gender?: Gender = undefined;
    birthday?: Date = undefined;
    teamId?: number = undefined;
    countryId?: number = undefined;
}