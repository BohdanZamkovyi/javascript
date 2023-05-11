let PI = 3.14159265;
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function area(a, b){
//     return a * b;
// }
// console.log(area(6, 3));
//-------------------------
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circleArea (radius){
//     return Math.pow(radius, 2)*PI;
// }
// console.log(circleArea(4));
//-------------------------
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinderArea(radius, height) {
//     return 2 * PI * radius * (radius + height);
// }
// console.log(cylinderArea(3, 8));
//-------------------------
// - створити функцію яка приймає масив та виводить кожен його елемент
// function eachElementArr(arr){
//     for (elementOfArr of arr){
//         console.log(elementOfArr);
//     }
// };
// let arr = [11, 'Gregoriy', 100500, 19];
// eachElementArr(arr);
//-------------------------
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function p (textContent){
//     document.write(`<p>${textContent}</p>`);
// };
// p('test');
//-------------------------
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function listWithThree(textContent){
//     document.write('<ul>');
//     for (let i = 0; i < 3; i++){
//         document.write(`<li>${textContent}</li>`);
//     }
//     document.write('</ul>');
// };
// listWithThree('test');
//-------------------------
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається
// другим аргументом, який є числовим (тут використовувати цикл)
// function list(textContent, numberLi){
//     document.write('<ul>');
//     for (let i = 0; i < numberLi; i++){
//         document.write(`<li>${textContent}</li>`);
//     }
//     document.write('</ul>');
// };
// list('test', 7);
//-------------------------
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [11, 'Gregoriy', 100500, 19, true];
// function arrayWrapper(array){
//     document.write('<ul>');
//     for (const element of array) {
//         document.write(`<li>${element}</li>`)
//     }
//     document.write('</ul>');
// };
// arrayWrapper(arr);
//-------------------------
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {name: 'Bohdan', age: 19, id: 1},
//     {name: 'Igor', age: 26, id: 2},
//     {name: 'Vasyliy', age: 25, id: 3},
//     {name: 'David', age: 32, id: 4},
//     {name: 'Luis', age: 23, id: 5}
// ];
// function createUserBlock (arr){
//     for (const arrElement of arr) {
//         document.write(`<div>ID: ${arrElement.id}, Name: ${arrElement.name}, Age: ${arrElement.age}</div>`);
//     }
// };
// createUserBlock(users);
//-------------------------
// - створити функцію яка повертає найменьше число з масиву
// let numbers = [11, 5, 29, 2, 7];
// function minNumber(arr){
//     let someNum = arr[0];
//     for (let arrElement of arr) {
//         if(arrElement < someNum){
//             someNum = arrElement;
//         }
//     }
//     return someNum;
// }
//
// console.log(minNumber(numbers));
//-------------------------
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let numbers = [11, 5, 2];
// function sum(arr){
//     let someNum = 0;
//     for (const arrElement of arr) {
//         someNum += arrElement;
//     }
//     return someNum;
// }
//
// console.log(sum(numbers));
//-------------------------
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// let numbers = [11,22,33,44];
// function swap (arr, index1, index2){
//     let holder = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = holder;
//     return arr
// }
//
// console.log(swap(numbers, 0, 3));
//-------------------------
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 25
// let currencyes = [{currency:'USD',value:40},{currency:'EUR',value:42}]
// function exchange(sum, currencyArr){
//     let completePrice = [];
//     for (let i = 0; i < currencyArr.length; i++) {
//         completePrice.push({});
//         let cutLink = completePrice[i];
//         cutLink.valuta = currencyArr[i].currency;
//         cutLink.value = sum / currencyArr[i].value;
//     }
//     return completePrice;
// }
//
// console.log(exchange(10000, currencyes));