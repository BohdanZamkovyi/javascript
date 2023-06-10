// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let btn = document.getElementsByTagName('button')[0];
let form = document.form1;
let div = document.createElement('div');
document.body.appendChild(div);
form.addEventListener('submit', ev => {
    ev.preventDefault();
    if (form.age.value >= 18){
        div.innerText = `Your age ${form.age.value}. All cool!!!`;
    }else{
        div.innerText = `Your age ${form.age.value}. Is\'s bad!!!`;
    }
})