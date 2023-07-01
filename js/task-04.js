const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const spanCaunter = document.querySelector('#value');


let counter = 0;


incrementButton.addEventListener('click', addDigit );
decrementButton.addEventListener('click', subDigit);

function addDigit() {
  counter += 1;
  spanCaunter.textContent = counter;
}

function subDigit() {
  counter -= 1;
  spanCaunter.textContent = counter;
}


