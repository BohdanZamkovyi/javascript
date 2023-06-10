// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
let url = new URL('http://jsonplaceholder.typicode.com/users');
fetch(url)
    .then(respone => {
        return respone.json()
    })
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            let link = document.createElement('a');
            link.innerText = ('detail');
            link.href = (url+`/${user.id}`);
            div.innerText = (`Id user: ${user.id} Name user: ${user.name}`);
            document.body.appendChild(div);
            div.appendChild(link);
            console.log(url);
        }
    })