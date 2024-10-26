const textInput = document.querySelector('#name-input');
const changeName = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  const inputValue = event.currentTarget.value.trim(); // обрізаємо пробіли

  if (inputValue === '') {
    changeName.textContent = 'Anonymous'; // якщо поле порожнє
  } else {
    changeName.textContent = inputValue.replace(/\s/g, ''); // видаляємо пробіли в середині тексту
  }
});

// Аналіз критичного питання:

// Використання незадекларованої змінної inputValue і неправильний обробник події 'blur'
// замість 'input' суттєво впливає на виконання скрипту вимогам завдання.Для вирішення
// критичної проблеми переконайтеся, що ви задекларували inputValue, присвоївши обрізане
// значення event.currentTarget.value, і використовуйте його у блоку if-else.Також змініть
// обробник події з 'blur' на 'input', щоб коректно оновлювати span в реальному часі, коли
// користувач вводить текст.
// Також це завдання не завантажується в браузері
// Завдання не прийнято.