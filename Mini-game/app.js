const board = document.querySelector('#board') //получаем доску

const colors = ['#A59EB1' , '#8E5C4AB' , '#D0836E', '#9CA9B1' , '#4B7A90' ,
'#142B43' , '#193C46' , '#212121'] //набор цветов

const SQARES_NUMBER = 500 //кол-во квадратиков

for (let i = 0; i < SQARES_NUMBER; i++) {
    const square = document.createElement('div') //создаем динамически
    square.classList.add('square') //Добавляю класс

    square.addEventListener('mouseover', () =>
    setColor(square)) //mouseover вызывает setColor когда наводим мышь на квадрат

    square.addEventListener('mouseleave', () =>
    removeColor(square)) // mouseleave это когда убираем мышь

    board.append(square) //добавляем в сам html
}

function setColor(element) {
    const color = getRandomColor() //Сначало получим цвет
    element.style.backgroundColor = color // а потом передадим сюда
    element.style.boxShadow = `0 0 2px ${color}, 0 0
    10px ${color}` //Благодаря этому в css добавляем свойство boxShadow,а с помощью `` можем передавать динамические значение
}

function removeColor(element) {
    element.style.backgroundColor = '#E7E7E7'
    element.style.boxShadow = '0 0 2px #E7E7E7'
} //эффект убирания цвета на #1d1d1d и не оставляем boxShadow

function getRandomColor() {
    const index = Math.floor(Math.random() *colors.length)
    return colors[index]
}
//Math.random() всегда выдает рандомное значение,random это метод,а Math большой объект с множеством функций для работы с математикой

// -------------------------------------------------------
// Способы сокращения

// function getRandomColor() {
//     const index = Math.floor(Math.random() *colors.length)
//     return colors[index]
// }
// можно сократить до

// function getRandomColor() {
//     return colors[Math.floor(Math.random() *colors.length)]
// }

// square.addEventListener('mouseover', setColor)

// square.addEventListener('mouseleave', removeColor)

// function setColor(event) {
//     const element = event.target
//     const color = getRandomColor() //Сначало получим цвет
//     element.style.backgroundColor = color // а потом передадим сюда
//     element.style.boxShadow = `0 0 2px ${color}, 0 0
//     10px ${color}` //Благодаря этому в css добавляем свойство boxShadow,а с помощью `` можем передавать динамические значение
// }

// function removeColor(event) {
//     const element = event.target
//     element.style.backgroundColor = '#E7E7E7'
//     element.style.boxShadow = '0 0 2px #E7E7E7'
// } //эффект убирания цвета на #1d1d1d и не оставляем boxShadow
