import { Gender } from "../../enums/gender.enum";

export interface IFootballPlayer {
    firstName: string,
    lastName: string,
    gender?: Gender,
    birthday?: Date,
    teamId?: number,
    countryId?: number,
}

