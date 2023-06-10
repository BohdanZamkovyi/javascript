// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення
// "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
let money = JSON.parse(localStorage.getItem('balance')) || {balance: 100};
function sayHi() {
       localStorage.setItem('balance',  JSON.stringify({balance: money.balance + 10}));
}
setTimeout(sayHi, 10000);
let div = document.createElement('div');
div.innerText = `${money.balance} грн`;
document.body.appendChild(div);