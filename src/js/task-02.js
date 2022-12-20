
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngred = document.querySelector("#ingredients");
// ul#ingredients что значит эта запись? где используется?

const itemsLi = ingredients.map(element => {
  const liElem = document.createElement('li');
  liElem.textContent = element;
  liElem.classList.add('item');
  // console.log(liElem);
  return liElem;
});

  ulIngred.append(...itemsLi);
  console.log(itemsLi);
  // console.log(console);


  
