// Напиши скрипт, который реагирует на изменение значения
// input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size.В результате
// при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const onInput = document.querySelector('#font-size-control');
const onText = document.querySelector('#text');

onInput.addEventListener('change', sizeFunction);
// onInput.addEventListener('input', sizeFunction); // почему и то и то срабатывает?

function sizeFunction() {
    // console.log(onInput.value);
    onText.style.fontSize = `${onInput.value}px`;
}
