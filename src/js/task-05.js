// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const onInput = document.querySelector('input#name-input');
const onSpan = document.querySelector('span#name-output');

onInput.addEventListener("input", (event) => {
    // onSpan.textContent = event.currentTarget.value || "Anonimos"; // через event.currentTarget.value тоже работает
    onSpan.textContent = event.target.value || "Anonimos";

    // if (event.currentTarget.value === '') onSpan.textContent = 'Anonymous';
    // как сделать чтобы Анонимос было после удаления всех символов?
    //обязательно ли писать event входящим параметром? если бы не было event в параметрах - как вернуть Anonimus при пустой строке?
});