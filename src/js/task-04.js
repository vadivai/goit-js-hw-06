
// Счетчик состоит из спана и кнопок, которые,
// при клике должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика
// и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;
const counter = document.querySelector('div#counter');
const decrementBtn = counter.firstElementChild;
const incrementBtn = counter.lastElementChild; // какие еще варианты обращения?
const span = document.querySelector('span#value'); // можно называть переменную span? как вытащить через div#counter
// console.log(decrementBtn, incrementBtn, span.textContent);

decrementBtn.addEventListener('click', () => {
    counterValue = counterValue - 1;
    span.textContent = counterValue;
    console.log('counterValue = ', counterValue);
    // return counterValue; когда нужно делать return?
    // return span.textContent;
});

incrementBtn.addEventListener('click', () => {
    counterValue = counterValue + 1;
    span.textContent = counterValue; 
    console.log('counterValue = ', counterValue);
    // return counterValue;
    // return span.textContent;
});

// вопросы: counterValue можно передать входящим параметром?
// что лучше возвращать counterValue или span.textContent
// почему без return тоже работает?
