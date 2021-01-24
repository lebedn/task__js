"use strict";
/* let a = prompt('Одиbн из послдних фильмов?', ''),
    b = prompt('На сколько оцение его?', ''),
    c = prompt('Один из послдних фильмов?', ''),
    d = prompt('На сколько оцение его?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
*/

//main


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы ужe смотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы ужe смотрели?', '');
    }
}
// start(); 

console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function snowMyBD() {
    switch (personalMovieDB.privat) {
        case false:
            console.log(personalMovieDB);
            break;
        case true:
            console.log('error');
            break;
        default:
            console.log('error');
    }
}
// snowMyBD();

function writeYourCernes() {
    for (let i = 1; i < 4; i++) {
        let a = prompt(`Ваш любимый жанр ${i}`);
        personalMovieDB.genres[i - 1] = a;
    }
}
writeYourCernes();
console.log(personalMovieDB);

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        let a = prompt('Один из последних фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}
// rememberMyFilms();

function detectPersonalLivel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено мало фильмов!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы клаcический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
// detectPersonalLivel();