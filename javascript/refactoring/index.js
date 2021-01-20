const battonElem = document.querySelector('.submit-button');
const errorElem = document.querySelector('.error-text');
const loginForm = document.querySelector('.login-form');

const onInputValid = () => {
  errorElem.textContent = '';

  if (loginForm.reportValidity()) {
    battonElem.disabed = false;
  } else {
    battonElem.disabed = true;
  }
};

const submitHandler = event => {
  event.preventDefault();

  fetch('https://5ff2e7d128c3980017b18ca3.mockapi.io/api/v1/form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(loginForm)),
  })
    .then(response => {
      if (response.ok) {
        return response.text();
      }

      throw new Error('Failed to create user');
    })
    .then(userData => {
      loginForm.reset();
      alert(userData);
    })
    .catch(err => {
      errorElem.textContent = err.message;
    });
};

loginForm.addEventListener('submit', submitHandler);
loginForm.addEventListener('input', onInputValid);
