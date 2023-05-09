// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = [
    10,
    100,
    true,
    'Bohdan',
    'true',
    28,
    1.5,
    8,
    'super',
    {name: 'bohdan', age: 19, status: true}
];
console.log(array[1], array[2], array[3], array[4], array[5], array[6], array[7], array[8], array[9], array[10]);
//
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const book1 = {
    title: 'День, що навчив мене жити',
    pageCount: 184,
    genre: 'бестселер'
}
const book2 = {
    title: 'Книга Людина в пошуках справжнього сенсу. Психолог у концтаборі',
    pageCount: 160,
    genre: 'бестселер'
}
const book3 = {
    title: 'МІЗЕРІ',
    pageCount: 384,
    genre: 'жахи'
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
const books = [
    {title: 'День, що навчив мене жити',
        pageCount: 184,
        genre: 'бестселер'},
    {
        title: 'Книга Людина в пошуках справжнього сенсу. Психолог у концтаборі',
        pageCount: 160,
        genre: 'бестселер'
    },
    {
        title: 'МІЗЕРІ',
        pageCount: 384,
        genre: 'жахи'
    }
]
// Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль
// кожного користувача
//