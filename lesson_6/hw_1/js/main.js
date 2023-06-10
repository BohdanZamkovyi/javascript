// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let strArray = ['hello world', 'lorem ipsum', 'javascript is cool'];
// for (str of strArray){
//     console.log(str.length);
// }
// ----------------
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let strArray = ['hello world', 'lorem ipsum', 'javascript is cool'];
// for (str of strArray){
//     console.log(str.toUpperCase());
// }
// ----------------
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let strArray = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
// for (str of strArray){
//     console.log(str.toLowerCase());
// }
// ----------------
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());
// ----------------
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// function stringToarray (string){
//     return string.split(' ');
// }
// let str = 'Ревуть воли як ясла повні';
// console.log(stringToarray(str));
// ----------------
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let numbers = [10,8,-7,55,987,-1011,0,1050,0];
// let numbersArr = numbers.map((number) => {
//     return number.toString()
// });
// console.log(numbersArr);
// ----------------
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// function sortNums(arr, direction){
//     arr.sort((a, b) => {
//         if(direction == 1){
//             return  a - b;
//         }else if (direction == 2){
//             return b - a;
//         }
//     });
// }
// sortNums(nums, 2);
// console.log(nums);
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// ----------------
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// ----------------
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let sortCourses = coursesAndDurationArray.sort((a, b) => (b.monthDuration - a. monthDuration));
// console.log(sortCourses);
// let filterMore5Month = coursesAndDurationArray.filter((course) => (course.monthDuration > 5));
// console.log(filterMore5Month);
// let plusID = coursesAndDurationArray.map((course, index) => {
//     return {title: course.title, monthDuration: course.monthDuration, id: index}
//     }
// );
// console.log(plusID);
// ----------------
// описати колоду карт (від 6 до туза без джокерів)
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
let cardsArr = [{color: 'black', value: 'joker'}, {color: 'red', value: 'joker'}];
let suits = ['spade', 'diamond', 'heart', 'clubs'];
let cardSuit = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
let color = ['red', 'black'];
function BuilderCards(...info){
    for (suit of suits) {
        for ( card of cardSuit){
            let colorCard;
            if (suit === 'spade' || suit === 'clubs'){
                colorCard = color[1];
            }else if (suit === 'diamond' || suit === 'heart'){
                colorCard = color[0];
            }
            cardsArr[cardsArr.length] = {cardSuit: suit, color: colorCard, value: card};

        }
    }
}
BuilderCards(suits, cardSuit, color);
console.log(cardsArr);
// - знайти піковий туз
let findAceBlack = cardsArr.find(a => (a.value === 'ace' && a.cardSuit === 'spade'));
console.log(findAceBlack);
// - всі шістки
let findAllSixs = cardsArr.filter(a => a.value === '6');
console.log(findAllSixs);
// - всі червоні карти
let findAllRedCards = cardsArr.filter((a) => (a.color === 'red'));
console.log(findAllRedCards);
// - всі буби
let findAllDiamondCards = cardsArr.filter(a => (a.cardSuit === 'diamond'));
console.log(findAllDiamondCards);
// - всі трефи від 9 та більше;
let findAllClubs9more = cardsArr.filter(a => (a.cardSuit === 'clubs' && a.value != '6' && a.value != '7' && a.value != '8' ));
console.log(findAllClubs9more);
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }