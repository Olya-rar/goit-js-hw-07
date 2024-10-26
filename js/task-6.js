const input = document.querySelector('input');
const create = document.querySelector('button[data-create]');
create.style.backgroundColor = '#4e75ff';
// Зміна кольору при наведенні
create.addEventListener('mouseover', () => {
  create.style.backgroundColor = '#6c8cff'; // колір при наведенні
});

// Повернення початкового кольору при відведенні курсора
create.addEventListener('mouseout', () => {
  create.style.backgroundColor = '#4e75ff'; // повертаємо початковий колір
});

const destroy = document.querySelector('button[data-destroy]');
destroy.style.backgroundColor = '#ff4e4e';
destroy.addEventListener('mouseover', () => {
  destroy.style.backgroundColor = '#ff7070';
});

destroy.addEventListener('mouseout', () => {
  destroy.style.backgroundColor = '#ff4e4e';
});

const boxes = document.querySelector('#boxes');

function clear() {
  input.value = '';
  sizes = 30;
}

let sizes = 30;

create.addEventListener('click', createMarkup);

function clearAll() {
  boxes.innerHTML = '';
  clear();
}

destroy.addEventListener('click', () => {
  clearAll();
});

function createMarkup() {
  if (input.value < 1 || input.value > 100) {
    console.log('error');
    return;
  }

  createBoxes(input.value);
}

function createBoxes(amount) {
  clearAll();

  // Використовуємо фрагмент для додавання всіх елементів за одну операцію
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${sizes}px`;
    box.style.height = `${sizes}px`;
    box.style.backgroundColor = getRandomHexColor();

    fragment.append(box);
    sizes += 10;
  }

  // Додаємо всі елементи до DOM за одну операцію
  boxes.append(fragment);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}