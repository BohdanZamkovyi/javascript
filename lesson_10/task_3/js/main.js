// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let locations = [
    {
        "title": "м. Київ",
        "type": "city"
    },
    {
        "title": "Житомирська область",
        "type": "oblast"
    },
    {
        "title": "Харківська область",
        "type": "oblast"
    },
    {
        "title": "Вінницька область",
        "type": "oblast"
    },
    {
        "title": "Чернігівська область",
        "type": "oblast"
    },
    {
        "title": "Дніпропетровська область",
        "type": "oblast"
    },
    {
        "title": "Черкаська область",
        "type": "oblast"
    },
    {
        "title": "Волинська область",
        "type": "oblast"
    },
    {
        "title": "Київська область",
        "type": "oblast"
    },
    {
        "title": "Миколаївська область",
        "type": "oblast"
    },
    {
        "title": "Рівненська область",
        "type": "oblast"
    },
    {
        "title": "Сумська область",
        "type": "oblast"
    },
    {
        "title": "Тернопільська область",
        "type": "oblast"
    },
    {
        "title": "Краматорський район",
        "type": "raion"
    },
    {
        "title": "Кіровоградська область",
        "type": "oblast"
    },
    {
        "title": "Хмельницька область",
        "type": "oblast"
    },
    {
        "title": "Запорізька область",
        "type": "oblast"
    },
    {
        "title": "Одеська область",
        "type": "oblast"
    },
    {
        "title": "Полтавська область",
        "type": "oblast"
    },
    {
        "title": "Львівська область",
        "type": "oblast"
    },
    {
        "title": "м. Кривий Ріг",
        "type": "city"
    },
    {
        "title": "Криворізька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Івано-Франківська область",
        "type": "oblast"
    },
    {
        "title": "Чернівецька область",
        "type": "oblast"
    },
    {
        "title": "Ізюмський район",
        "type": "raion"
    },
    {
        "title": "Бахмутська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Васильків",
        "type": "city"
    },
    {
        "title": "Васильківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Білоцерківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Біла Церква",
        "type": "city"
    },
    {
        "title": "Донецька область",
        "type": "oblast"
    },
    {
        "title": "Покровський район",
        "type": "raion"
    },
    {
        "title": "Уманська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Бахмутський район",
        "type": "raion"
    },
    {
        "title": "Закарпатська область",
        "type": "oblast"
    },
    {
        "title": "Лубенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Лубни",
        "type": "city"
    },
    {
        "title": "Полтавська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Полтава",
        "type": "city"
    },
    {
        "title": "м. Старокостянтинів",
        "type": "city"
    },
    {
        "title": "Старокостянтинівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Миколаїв",
        "type": "city"
    },
    {
        "title": "Миколаївська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Торецька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Кропивницький район",
        "type": "raion"
    },
    {
        "title": "Першотравенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Нікопольська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Нікополь",
        "type": "city"
    },
    {
        "title": "м. Першотравенськ",
        "type": "city"
    },
    {
        "title": "Одеський район",
        "type": "raion"
    },
    {
        "title": "м. Черкаси",
        "type": "city"
    },
    {
        "title": "Черкаська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Добропільська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Херсонська область",
        "type": "oblast"
    },
    {
        "title": "Сумська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Суми",
        "type": "city"
    },
    {
        "title": "Первомайська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Краматорська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Макарівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Краматорськ",
        "type": "city"
    },
    {
        "title": "Миргородська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Бориспіль",
        "type": "city"
    },
    {
        "title": "Броварська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Миргород",
        "type": "city"
    },
    {
        "title": "Бориспільська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Бровари",
        "type": "city"
    },
    {
        "title": "м. Вознесенськ",
        "type": "city"
    },
    {
        "title": "Коростенський район",
        "type": "raion"
    },
    {
        "title": "м. Первомайськ",
        "type": "city"
    },
    {
        "title": "Миронівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Вознесенський район",
        "type": "raion"
    },
    {
        "title": "Синельниківський район",
        "type": "raion"
    },
    {
        "title": "Фастівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Вознесенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Житомирський район",
        "type": "raion"
    },
    {
        "title": "Дружківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Фастів",
        "type": "city"
    },
    {
        "title": "Слов'янська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Запорізький район",
        "type": "raion"
    },
    {
        "title": "м. Слов'янськ",
        "type": "city"
    },
    {
        "title": "м. Кременчук",
        "type": "city"
    },
    {
        "title": "Ніжинський район",
        "type": "raion"
    },
    {
        "title": "м. Ватутіне",
        "type": "city"
    },
    {
        "title": "Ватутінська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Кременчуцька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Пологівський район",
        "type": "raion"
    },
    {
        "title": "Дніпровська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Дніпро",
        "type": "city"
    },
    {
        "title": "Лозівський район",
        "type": "raion"
    },
    {
        "title": "Покровська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Обухів",
        "type": "city"
    },
    {
        "title": "Узинська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Шепетівський район",
        "type": "raion"
    },
    {
        "title": "Пирятинська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Сумський район",
        "type": "raion"
    },
    {
        "title": "Харківський район",
        "type": "raion"
    },
    {
        "title": "Жашківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Пирятин",
        "type": "city"
    },
    {
        "title": "Павлоградський район",
        "type": "raion"
    },
    {
        "title": "Голованівський район",
        "type": "raion"
    },
    {
        "title": "Обухівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Подільський район",
        "type": "raion"
    },
    {
        "title": "м. Охтирка",
        "type": "city"
    },
    {
        "title": "Мар'їнська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Мелітополь",
        "type": "city"
    },
    {
        "title": "Куп’янський район",
        "type": "raion"
    },
    {
        "title": "Святогірська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Рівне",
        "type": "city"
    },
    {
        "title": "Бородянська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Роздільнянський район",
        "type": "raion"
    },
    {
        "title": "Запорізька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Шосткинська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Болградський район",
        "type": "raion"
    },
    {
        "title": "Прилуцький район",
        "type": "raion"
    },
    {
        "title": "Олешківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Березівський район",
        "type": "raion"
    },
    {
        "title": "Очаківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Смілянська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Очаків",
        "type": "city"
    },
    {
        "title": "Рівненська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Первомайський район",
        "type": "raion"
    },
    {
        "title": "Ізмаїльський район",
        "type": "raion"
    },
    {
        "title": "Сквирська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Шостка",
        "type": "city"
    },
    {
        "title": "Мелітопольська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Маріупольський район",
        "type": "raion"
    },
    {
        "title": "Охтирська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Білгород-Дністровський район",
        "type": "raion"
    },
    {
        "title": "м. Запоріжжя",
        "type": "city"
    },
    {
        "title": "м. Коростень",
        "type": "city"
    },
    {
        "title": "Луганська область",
        "type": "oblast"
    },
    {
        "title": "м. Житомир",
        "type": "city"
    },
    {
        "title": "Курахівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Черкаський район",
        "type": "raion"
    },
    {
        "title": "Новоград-Волинський район",
        "type": "raion"
    },
    {
        "title": "Костянтинівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Переяславська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Новоукраїнський район",
        "type": "raion"
    },
    {
        "title": "Уманський район",
        "type": "raion"
    },
    {
        "title": "Коростенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Переяслав",
        "type": "city"
    },
    {
        "title": "Шосткинський район",
        "type": "raion"
    },
    {
        "title": "Великоновосілківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Чернігівський район",
        "type": "raion"
    },
    {
        "title": "Радомишльська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Вугледарська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Звенигородський район",
        "type": "raion"
    },
    {
        "title": "м. Конотоп",
        "type": "city"
    },
    {
        "title": "Вишгородська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Гребінківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Сарненський район",
        "type": "raion"
    },
    {
        "title": "Бердянський район",
        "type": "raion"
    },
    {
        "title": "Миколаївський район",
        "type": "raion"
    },
    {
        "title": "Гостомелська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Дубровицька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Українська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Сарненська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Воскресенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Маріуполь",
        "type": "city"
    },
    {
        "title": "Чугуївський район",
        "type": "raion"
    },
    {
        "title": "Охтирський район",
        "type": "raion"
    },
    {
        "title": "Житомирська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Сарни",
        "type": "city"
    },
    {
        "title": "Широківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Славутицька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Золотоніський район",
        "type": "raion"
    },
    {
        "title": "Конотопська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Волноваський район",
        "type": "raion"
    },
    {
        "title": "Донецький район",
        "type": "raion"
    },
    {
        "title": "Маріупольська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Вараський район",
        "type": "raion"
    },
    {
        "title": "м. Славутич",
        "type": "city"
    }
];
for (let i = locations.length; i > 100; i--) {
    locations.pop();
}
let wrapper = document.createElement('div');
let buttons_box = document.createElement('div');
buttons_box.classList.add('buttons_box');
wrapper.classList.add('wrapper');
document.body.getElementsByClassName('head_box')[0].appendChild(wrapper);
let page = 0;
let btnPrev = document.createElement('button');
btnPrev.classList.add('btn_prev');
btnPrev.innerText = 'Prev';
let btnNext = document.createElement('button');
btnNext.classList.add('btn_next');
btnNext.innerText = 'Next';
let wSelect = document.getElementsByClassName('wrapper')[0];
for (let i = 0; i < 10; i++) {
    let div = document.createElement('div');
    div.classList.add('item');
    wSelect.appendChild(div);
}

wSelect.appendChild(buttons_box);
let btnBox = document.getElementsByClassName('buttons_box')[0];
btnBox.append(btnPrev, btnNext);
let buttons = document.getElementsByTagName('button');
console.log(locations);
function createList(page){
    for (let i = page * 10;i < (page+1) * 10; i++) {
        let block = document.getElementsByClassName('item')[i - page * 10];
        block.innerHTML = `<p class="title">${locations[i].title}</p><span>${locations[i].type}</span>`;
    }
}
createList(page);
buttons[1].addEventListener('click', (ev) => {
    page++;
    buttons[0].disabled = false;
    buttons[0].style.display = 'block';
    if (page === 9){
        buttons[1].disabled = true;
        buttons[1].style.display = 'none';
    }
    createList(page);
});
buttons[0].disabled = true;
buttons[0].style.display = 'none';
buttons[0].addEventListener('click', (ev) => {
    page--;
    buttons[1].disabled = false;
    buttons[1].style.display = 'block';
    if (page === 0){
        buttons[0].disabled = true;
        buttons[0].style.display = 'none';
    }
    createList(page);
});

