// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести
// об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// let form = document.createElement('form');
// form.setAttribute('name', 'form1')
// let nameInput = document.createElement('input');
// nameInput.setAttribute('type', 'text');
// nameInput.setAttribute('name', 'name');
// let surname = document.createElement('input');
// surname.setAttribute('name', 'surname');
// surname.setAttribute('type', 'text');
// let age = document.createElement('input');
// age.setAttribute('type', 'number');
// age.setAttribute('name', 'age')
// document.body.appendChild(form);
// let buttonForm = document.createElement('button');
// buttonForm.innerText = 'send';
// let selectForm = document.form1;
// selectForm.append(nameInput, surname, age, buttonForm);
// console.log(selectForm);
// let result = document.createElement('div');
// result.classList.add('result');
//
// selectForm.addEventListener('submit', (ev) =>{
//     ev.preventDefault();
//     result.innerHTML = `
//         name: ${selectForm.name.value}</br>surname: ${selectForm.surname.value}</br> age: ${selectForm.age.value}`;
//     document.body.appendChild(result);
// })
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде
// додавати до неї +1
// let number = JSON.parse(localStorage.getItem('reloadNumber') || 1);
// let div = document.createElement('div');
// div.innerText = number;
// document.body.appendChild(div);
// number += 1;
// JSON.stringify(localStorage.setItem('reloadNumber', number));
// ==========================

//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
//
//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається