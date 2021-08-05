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

//METHODS

//selecting elements
//selecting the entire document using document element of any webpage just using document is not enough
//apply css styles to entire page
//entire html
console.log(document.documentElement);
//select the whole document

//select the head and body
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
//first element that matches selector here
//every element
const allSections = document.querySelectorAll('.section');
console.log(allSections);
//returns node list containing all the elements with the class selection

//most used ways of selecting elements
//also available on all the elements to use

document.getElementById('section--1'); //don't need selector
const allButtons = document.getElementsByTagName('button'); //get element by tag name all elements with tagname button

console.log(allButtons); //tag name returns html collection instead of nodelist live collection

//if dom changes the html collection is updated automatically
//eg remove element in inspector

//node list doesn't update itself in the console when deleted

console.log(document.getElementsByClassName('btn'));
//no dot will also return a live html collection

//creating and inserting elements

//.insertAdjacentHTML
//creating dom element programatically
const message = document.createElement('div');
//creates dom element stores it into message
//not yet in the dom itself
//add class eg when selecting element
message.classList.add('cookie-message'); //add class
message.textContent = 'We use cookies for improved functionality and analytics';
//
message.innerHTML =
  'We use cookies for imporved functionality and analytics. <button class = "btn btn--close-cookie"> Got it!</button>';
//add class in inner html
header.prepend(message);
//new message element to dom after header
//first child of header element
//header.append(message);
//last child at the bottom

//only inserted once can't be in two places simultaneously moved the element didn't insert it was already inserted by prepend
//dom element is unique

//copy element

//header.append(message.cloneNode(true));
//clone element and add it to the bottom

//before as a sibling
//after as a sibling

//header.append(message);
//
//header.before(message);

//delete elements
//remove element when button clicked

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    //before could only do
    //    message.parentElement.removeChild(message);
  });

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
//select scroll button and then section to scroll to

btnScrollTo.addEventListener('click', function (e) {
  //first way get the coordinates fo element to scroll to
  const section1coords = section1.getBoundingClientRect(); //returns coordinates from left side and y position mesaured from top
  console.log(section1coords); //section's coordinates

  console.log(e.target.getBoundingClientRect()); //cordinates of button x and y
  //get x and y positon of current scroll/position
  //when at top both values are 0
  console.log('Current sroll (X/Y)', window.pageXOffset, window.pageYOffset); //position of browser from top and left

  //read height and length of current viewwport
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
    //doesn't include scrollbars
  );
  //decreasing visible box will change viewport height and width
  //global function on window object first argument is left position
  // window.scrollTo(
  //   section1coords.left + window.pageXOffset, //position plus scroll
  //   section1coords.top + window.pageYOffset
  // ); //second is position from top over viewport
  //RELATIVE TO VIEWPORT
  //add the current scrolling position
  window.scrollTo({
    left: section1coords.left, //+ window.pageXOffset, //position plus scroll
    top: section1coords.top, //+ window.pageYOffset,
    behaviour: 'smooth',
    //specifiy object with the left top and behaviour properties
  });
  // section1.scrollIntoView({ behavior: 'smooth' });
  //modern browsers
});

//events different events mouse events keyboard events e.g scroll full screen mode etc
//listen for events in event listener event will always happen regardless if you listen for it or not

const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', function (e) {
//   //as hover ovrer the element alert comes up
//   //like the css hover
//   //can add multiple event listeners to one property
//   alert('addEventlistener: Great! You are reading the heading :D');
// });

//property set to function
// h1.onmouseenter = function (e) {
//   //as hover ovrer the element alert comes up
//   //like the css hover
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

//can remove event handler if don't need it anymore

//have to put the function inside a variable

const alertH1 = function (e) {
  //as hover ovrer the element alert comes up
  //like the css hover
  //can add multiple event listeners to one property
  alert('addEventlistener: Great! You are reading the heading :D');

  //after running the alert it removes the eventlistener
  // h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);
//can remove event handler if don't need it anymore

//have to put the function inside a variable
//can prevent the event and remove it too in side the function

//can put it into a set timeout function

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//third way of handling events html attribute

//bubbling and capturing
//when click happens on link dom generated click event not generated at target element
//event generated at roof of document top of dom tree, travels down document root to target element passes through all the parents
//when event reaches target target phase begins and can handle the event
//event then travels up to the document root again bubbling phase goes up through the parents
//event bubbles up through parent elements as if it happened in parent elements
//can only be handled in target phase and bubbling phase
//events propagate

//rgb(255,255,255)
//random colour function
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
//x math.random * (max - min) then add min to both sides
//math.random 0....1 -> 0...(max-min) -> min...(max-min + min)
//cancel (-min + min)
//min...
//use random number function to generate random colour in template literal string string
const randomColor = () => {
  return `rgb(${randomInt(0, 255)}),(${randomInt(0, 255)},(${randomInt(
    0,
    255
  )}))`;
};

console.log(randomColor(0, 255));

//attach event handler to first link and parent elements too

document
  .querySelector('.nav__link__login--btn')
  .addEventListener('click', function (e) {
    //in event handler this keyword points to element to which the event handler is attached
    this.style.backgroundColor = randomColor(); //set style background to random colour
    console.log('LINK', e.target, e.currentTarget); // e.currenttarget element to which event is attached
    //e.target where the element originates where the click happened NOT element on which event handler was attached
  });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();

  //event starts at document root bubbles down to target element and then bubbles up
  //both handles are handling same event
  console.log('CONTAINER', e.target);
  //target is nav link element where click first happened
  //event originated at link and bubbles up can handle event in all parent elements
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  //event handled in all three places
  console.log('NAV', e.target);
  //target is nav link element where click first happened
});
