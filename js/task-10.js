function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const enterNumber = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');



btnCreate.addEventListener('click', CreateBoxes);
btnDestroy.addEventListener('click', isDestroyBoxes);

const step = Number(enterNumber.getAttribute('step'));
const minValue = Number(enterNumber.getAttribute('min'));
const maxValue = Number(enterNumber.getAttribute('max'));
let amount;

function CreateBoxes(amount) {
  let counter = enterNumber.value
  let areaCounter = 30;

  for(let i = 0; i <  counter; i += step) {
    amount = Number(enterNumber.value)
    if(amount < minValue || amount > maxValue) {
      alert('Wrong number');
      amount = '';
      break
    }
    
    if( i === 0) {
      const newBox = document.createElement('div');
      newBox.style.backgroundColor = getRandomHexColor();
      newBox.style.width = `${areaCounter}px`;
      newBox.style.height = `${areaCounter}px`;
      boxesContainer.appendChild(newBox);
    }
    
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
  enterNumber.value = '';
}
