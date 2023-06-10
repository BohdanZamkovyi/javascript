// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив
// sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка
// sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про
// відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під
// кожну сессію
let holderArraySessions = JSON.parse(localStorage.getItem('sessions'));
let time;
let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);
if (holderArraySessions !== null) {
    for (const session of holderArraySessions) {
        time = new Date(session.time);
        let div = document.createElement('div');
        div.classList.add(`infoOfSessions`);
        div.innerHTML = `ID: ${session.count}</br>Year: ${time.getFullYear()}</br>Day: ${time.getDay()}</br>
        Hours: ${time.getHours()}</br>
        Minute: ${time.getMinutes()}</br>Seconds: ${time.getSeconds()}`;
        wrapper.appendChild(div);
    }
}