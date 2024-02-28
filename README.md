# Каталог футболистов 3.0

Это простейшее Web-приложение для управления списком футболистов. Пользователь может добавлять новых футболистов, редактировать их данные и просматривать список всех футболистов.

## Установка

1. Склонируйте репозиторий на свой компьютер.
2. Запустите бэкенд. Бэкенд находится в другом репозитории по следующей ссылке: https://github.com/ILFirV-V/FootballPlayersCatalog.git
3. Установите необходимые зависимости для фронтенда. Выполните команду `npm install`.
4. Измените localhost в файле `src/app/services/constants.ts`, если это необходимо.
5. Запустите фронтенд. Для этого выполните команду `ng serve`.

После выполнения этих шагов вы можете открыть приложение в браузере по адресу `http://localhost:4200/`.

## Использование

1. Добавление футболистов:
   - Перейдите на нужную страницу приложения.
   - Заполните все необходимые поля (Имя, Фамилия, Пол, Дата рождения, Название команды, Страна).
   - Нажмите кнопку "Добавить".
   - Добавить команду можно на этой же странице, после добавления, она появится в списке для выбора на этой же странице.

2. Просмотр списка футболистов:
   - Перейдите на вторую страницу приложения.
   - Просмотрите список всех добавленных футболистов.
   - Для редактирования данных футболиста нажмите кнопку "Редактировать".
   - Есть поиск, сортировка и пагинация.

3. Редактирование футболистов:
   - На странице списка футболистов нажмите кнопку "Редактировать" рядом с выбранным футболистом.
   - Внесите необходимые изменения.
   - Нажмите кнопку "Изменить".
   - Добавить команду можно на этой же странице, после добавления, она появится в списке для выбора на этой же странице.


## Дальше идеть стандартный файл readme.md angular

# FootballPlayersApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
