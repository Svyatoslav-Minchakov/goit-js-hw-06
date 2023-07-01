const modalForm = document.querySelector('.login-form');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');

modalForm.addEventListener('submit', sendModalForm);

function sendModalForm(event) {
  event.preventDefault();
  if(emailInput.value === '' || passwordInput.value === '') {
    alert('Всі поля повинні бути заповнені!')
  } else{
    const userConnection = {
      email: emailInput.value,
      password: passwordInput.value 
    }
    console.log(userConnection)
    modalForm.reset();
  }
}
