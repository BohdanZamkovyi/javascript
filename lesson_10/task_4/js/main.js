// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let btn = document.getElementById('button');
let text = document.getElementById('text');
btn.addEventListener('click', (e) => {
    if (text.style.display === 'none'){
        text.style.display = 'block';
        btn.innerText = 'Hide text';
    }else if(text.style.display !== 'none'){
        text.style.display = 'none';
        btn.innerText = 'Show text';
    }
})