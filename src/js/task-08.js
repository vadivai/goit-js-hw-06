// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, 
// что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, 
// где имя поля будет именем свойства, а значение поля - значением свойства.
// Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const formElement = document.querySelector('.login-form');

formElement.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

  console.log(event.currentTarget.elements);
    
  const {
    elements: { email, password }
  } = event.currentTarget;

// const {elements: { email, password } } = event.currentTarget;
// const { email, password } = event.currentTarget.elements;
// это равнозначные выражения?

// Деструктуризация

  // const book = {
  //   title: `Per`,
  //   author: `Andrii`,
  //   isPublic: true
  // }
// const { title, author, isPublic, rating, coverImage } = book;
  
  // const event = {
  //   a: null,
  //   b: null,
  //   currentTarget: {
  //     elements: {
  //       email: {value: email},
  //       password: {value: password}
  //     }
  //   }
  // } 
    
  if (email.value === "" || password.value === "") {
    return alert("Заполни все поля!");
  }

    console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}



