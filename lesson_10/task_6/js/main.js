// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій
// вмиіст ячеєк.При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
const form = document.create_table;
form.addEventListener('submit', (ev) => {
    if (document.getElementsByTagName('table')[0]){
        document.getElementsByTagName('table')[0].remove();
    }
    ev.preventDefault();
    const table = document.createElement('table');
    document.body.appendChild(table);
    for (let i = 0; i < form.rows.value; i++) {
        const tr = document.createElement('tr');
        table.appendChild(tr);
        for (let i = 0; i < form.columns.value; i++){
            const td = document.createElement('td');
            td.innerText = form.content.value;
            tr.appendChild(td);
        }
    }
});