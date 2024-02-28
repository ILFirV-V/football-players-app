import { Component, EventEmitter, Output } from '@angular/core';
import { SortOption } from '../../../models/types/sort-option.type';
import { SortOrder } from '../../../models/types/sort-order.type';

@Component({
  selector: 'app-filter',
  templateUrl: `./filter.component.html`,
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
    currentSortOption: SortOption = "id";
    currentSortOrder: SortOrder = "asc";
    currentCategory: string = 'all';
    categories: string[] = [];
    searchValue: string = '';

    filters: {name: string, value: SortOption}[] = [
      {name: 'без сортировки', value: 'id'},
      {name: 'имя', value: 'firstName'},
      {name: 'фамилия', value: 'lastName'},
      {name: 'команда', value: 'team'},
      {name: 'страна', value: 'country'},
      {name: 'дата рождения', value: 'birthday'},
    ];

    @Output() sortOptionChanged = new EventEmitter<SortOption>();
    @Output() sortOrderChanged = new EventEmitter<SortOrder>();
    @Output() categoryChanged = new EventEmitter<string>();
    @Output() searchChanged = new EventEmitter<string>();

    onSortOptionChange(): void {
      this.sortOptionChanged.emit(this.currentSortOption);
    }

    onSortOrderChange(): void {
      this.sortOrderChanged.emit(this.currentSortOrder);
    }

    onSearch(): void {
      this.searchChanged.emit(this.searchValue);
    }
}
