'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
//const test = document.querySelector('.test');
//console.log(test, 'Button clicked');

const showModal = function () {
  console.log(modal, 'Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  console.log(modal, 'Button clicked');
};

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', showModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  //console.log(event.keyCode);
  if (event.keyCode === 27) {
    if (!modal.classList.contains('hidden')) {
      //console.log(modal.classList.contains('hidden'));
      closeModal();
      //console.log(modal.classList.contains('hidden'));
    }
  }
});
