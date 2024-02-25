import { IFootballPlayer } from "./interfaces/request/football-player-interface";
import { Gender } from "./enums/gender.enum";


export class Footballer implements IFootballPlayer  {
    birthday?: Date = undefined;
    teamId?: number = undefined;
    countryId?: number = undefined;
    firstName: string = "";
    lastName: string = "";
    gender?: Gender = undefined;
}