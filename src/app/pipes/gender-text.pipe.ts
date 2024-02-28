import { Pipe, PipeTransform } from '@angular/core';
import { Gender } from '../models/enums/gender.enum';

@Pipe({
    name: 'genderText'
})
export class GenderTextPipe implements PipeTransform {
    transform(value: number): string {
        switch (value) {
            case Gender.female:
                return 'Женский';
            case Gender.male:
                return 'Мужской';
            default:
                return '';
        }
    }
} 