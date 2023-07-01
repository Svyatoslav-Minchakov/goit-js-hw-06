const enterName = document.querySelector('#name-input');
const defName = document.querySelector('#name-output');

function addName(event) {
  defName.textContent = event.currentTarget.value.trim();
  if(event.currentTarget.value.trim() === '') defName.textContent = 'Anonymous!';
}

enterName.addEventListener('input', addName);