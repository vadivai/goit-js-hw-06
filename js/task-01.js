// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет
// в консоль текст заголовка элемента(тега < h2 >)
// и количество элементов в категории(всех вложенных в него < li >).
// В результате, в консоли будут выведены такие сообщения.

// const ulId = document.querySelectorAll('#categories');
// const ulElem = ulId.querySelectorAll('li.item'); так можно? плюсы-минусы

// const ulElem = document.querySelectorAll('li.item'); что означают цвета красный, зеленый, желтый?


// const listWithId = document.querySelector('#categories');
// const itemByLi = listWithId.children;
// console.log(`Number of categories: ${itemByLi.length}`); не массив?

// console.log(itemByLi.querySelector('h2')); почему не срабатывает?
// console.log(listWithId.querySelectorAll('h2').textContent);

const idList = document.querySelector('#categories');
// const items =Array.from(listWithId.children); //почему через детей не работает?
const items = idList.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

const list = document.querySelectorAll('#categories>li');

list.forEach((li) => {
    console.log('');
    console.log(`Category: ${li.firstElementChild.textContent}`);
    console.log(`Elements: ${li.lastElementChild.children.length}`); //какие еще варианты обращения?
});


// itemByLi.forEach(element => {
//     const h2Elem = element.textContent;
//     const 
//     console.log(`Category: ${ h2Elem }`);
//     console.log(`Elements: $`);
// });

