// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16,
// true, false.
//     Вивести кожну змінну за допомогою: console.log
//
const one = 'help';
const scool = 'owu';
const domen = 'com';
const domenTwo = 'ua';
const number = 1;
const numberTwo = 10;
const numberThree = -999;
const numberFour = 123;
const PI = 3.14;
const numberFive = 2.7;
const numberSix = 16;
const boolean1 = true;
const boolean2 = false;

console.log(one, scool, domen, domenTwo, number, numberTwo, numberThree, numberFour, PI, numberFive, numberSix, boolean1, boolean2);

//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)
//
let firstName = 'Zamkovyi';
let middleName = 'Bohdan';
let lastName = 'Volodimirovichl';
let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;
console.log(typeof a, a,' ', typeof b, b, ' ', typeof c, c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
const name = prompt('Ваше ім\'я:');
const nameTwo = prompt('Ваше прізвище:');
const date = prompt('Ваш вік:');
const personLog = name + ' ' + nameTwo + ', ваш вік: ' + date;
console.log(personLog);