function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const enterNumber = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');



btnCreate.addEventListener('click', isCreateBoxes);
btnDestroy.addEventListener('click', isDestroyBoxes);

function isCreateBoxes() {
  let counter = enterNumber.value
  let areaCounter = 20;

  for(let i = 0; i <  counter; i++) {
    areaCounter +=10;
    const newBox = document.createElement('div');
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.width = `${areaCounter}px`;
    newBox.style.height = `${areaCounter}px`;
    boxesContainer.appendChild(newBox);
  }
  
}

function isDestroyBoxes() {
  boxesContainer.innerHTML = '';
}
