const textInput = document.querySelector('#name-input');
const changeName = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  const inputValue = event.currentTarget.value.trim();

  if (inputValue === '') {
    changeName.textContent = 'Anonymous';
  } else {
    changeName.textContent = inputValue.replace(/\s/g, '');
  }
});