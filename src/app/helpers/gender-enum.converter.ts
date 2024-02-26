import { Gender } from "../models/enums/gender.enum";

export function getGenderFromNumber(genderNumber: number): Gender {
    switch (genderNumber) {
        case 0:
            return Gender.female;
        case 1:
            return Gender.male;
        default:
            throw new Error("Unknown gender number: ${genderNumber}");
    }
}