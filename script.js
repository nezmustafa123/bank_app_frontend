'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
    e.preventDefault();
    //prevent website from jumping up 
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//for each available on node list too
//add event listener to each button using for each 
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
//call back function executed when eventlistener added to buttons clicked
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
