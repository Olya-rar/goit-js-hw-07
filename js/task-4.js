const formSubmit = document.querySelector('form');

formSubmit.addEventListener('submit', event => {
  event.preventDefault();

  const emailValue = document.querySelector('input[name="email"]').value;
  const passwordValue = document.querySelector('input[name="password"]').value;
  // Перевіряємо, чи заповнені всі поля
  if (!emailValue || !passwordValue) {
    return alert('All form fields must be filled in');
  }

  console.log({
    email: emailValue,
    password: passwordValue,
  });

  // Очищуємо форму після успішної обробки
  formSubmit.reset();
});