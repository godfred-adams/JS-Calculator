const buttonElement = document.querySelectorAll('.js-button');
const screenElement = document.querySelector('.screen-number');
const themeElement = document.querySelector('.theme-btn');

let calculation = JSON.parse(localStorage.getItem('calculation')) || '';

displayCalculation();

//adding event listeners to the buttons
buttonElement.forEach((button) => {
  button.addEventListener('click', () => {
    calculation += button.getAttribute('data-set');
    saveCalculation();
    displayCalculation();
  }); 
});

document.querySelector('.js-equal-button')
  .addEventListener('click', () => {
    calculation = eval(calculation);
    saveCalculation();
    displayCalculation();
});

document.querySelector('.js-del-button')
  .addEventListener('click', () => {
    calculation = calculation.substring(0,calculation.length -1);
    displayCalculation();
});

document.querySelector('.js-reset-button')
  .addEventListener('click', () => {
    calculation = '';
    localStorage.removeItem('calculation');
    displayCalculation();
  });

themeElement.addEventListener('click', () => {
  themeElement.classList.toggle('active');
  document.body.classList.toggle('active');
  document.querySelector('.screen-number')
    .classList.toggle('active');
});

  // function for displaying the calculation on screen

  function displayCalculation() {
    if (calculation === '') {
      screenElement.innerHTML = `<p>0</p>`;
    } else {
      screenElement.innerHTML = `${calculation}`;
    }
  }

  function saveCalculation() {
    localStorage.setItem('calculation', JSON.stringify(calculation));
  }