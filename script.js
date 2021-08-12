'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
//select scroll button and then section to scroll to
const nav = document.querySelector('.nav');
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
///scroll
btnScrollTo.addEventListener('click', function (e) {
  //first way get the coordinates fo element to scroll to
  const section1coords = section1.getBoundingClientRect(); //returns coordinates from left side x and y position mesaured from top
  console.log(section1coords); //section's coordinates

  // console.log(e.target.getBoundingClientRect()); //cordinates of button x and y
  //get x and y positon of current scroll/position
  //when at top both values are 0
  // console.log('Current sroll (X/Y)', window.pageXOffset, window.pageYOffset); //position of browser from top and left
  //
  // //read height and length of current viewwport
  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  //   //doesn't include scrollbars
  // );
  //decreasing visible box will change viewport height and width
  //global function on window object first argument is left position
  // window.scrollTo(
  //   section1coords.left + window.pageXOffset, //position plus scroll
  //   section1coords.top + window.pageYOffset
  // ); //second is position from top over viewport
  //RELATIVE TO VIEWPORT
  //add the current scrolling position
  window.scrollTo({
    left: section1coords.left + window.pageXOffset, //position plus scroll
    top: section1coords.top + window.pageYOffset,
    behaviour: 'smooth',
    //specifiy object with the left top and behaviour properties
  });
  // section1.scrollIntoView({ behavior: 'smooth' });
  //modern browsers
});

//PAGE NAVIGATION
//node list
document.querySelectorAll('.nav__link').forEach(function (el) {
  //loop over using for each, to each element attach event listener
  el.addEventListener('click', function (e) {
    // e.preventDefault(); //prevent default scroll/jump to section to implement scrolling
    // console.log('LINK');
    // //take href attribulte form nav link buttons this refers to element event handler is attached to (each link)
    // //get href get attribute to get the writte href part not absolute value
    // const id = this.getAttribute('href');
    // console.log(id);
    // document.querySelector(id).scrollIntoView({ behavior: 'smooth' }); //use the attriute  string that is returned as a selector the href matches the id of element you want to scroll TO
    // //
    // //use event delegation put handler on common parent so event bubbles up catch event in parent element and handle it there look at event target property
  });
});

// 1. add event listener to common parent of all events interested in
// 2. Determine what element orginated  from using event target

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target); // use target to see where event happened work with click that happened on one of the links

  //matching classlist strategy

  if (e.target.classList.contains('nav__link')) {
    // if class contains nav link fires otherwise doesn't
    e.preventDefault(); //prevent default scroll/jump to section to implement scrolling
    console.log('LINK');
    //take href attribulte form nav link buttons this refers to element event handler is attached to (each link)
    //get href get attribute to get the writte href part not absolute value
    const id = e.target.getAttribute('href'); //element is e.target
    console.log(id);

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' }); //use the attriute  string that is returned as a selector the href matches the id of element you want to scroll TO
    //

    //use event delegation put handler on common parent so event bubbles up catch event in parent element and handle it there look at event target property
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
// message.textContent = 'We use cookies for improved functionality and analytics';
// //
message.innerHTML =
  'We use cookies for imporved functionality and analytics. <button class = "btn btn--close-cookie"> Got it!</button>';
// add class in inner html
header.prepend(message);
//new message element to dom after header
//first child of header element
//header.append(message);
//last child at the bottom

//delete elements
//remove element when button clicked

//only inserted once can't be in two places simultaneously moved the element didn't insert it was already inserted by prepend
//dom element is unique
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    //before could only do
    //message.parentElement.removeChild(message);
  });

//copy element

//header.append(message.cloneNode(true));
//clone element and add it to the bottom

//before as a sibling
//after as a sibling

//header.append(message);
//
//header.before(message);

//events different events mouse events keyboard events e.g scroll full screen mode etc
//listen for events in event listener event will always happen regardless if you listen for it or not

// const h1 = document.querySelector('h1');

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
//
// const alertH1 = function (e) {
//   //as hover ovrer the element alert comes up
//   //like the css hover
//   //can add multiple event listeners to one property
//   alert('addEventlistener: Great! You are reading the heading :D');
//
//   //after running the alert it removes the eventlistener
//   // h1.removeEventListener('mouseenter', alertH1);
// };
//
// h1.addEventListener('mouseenter', alertH1);
// //can remove event handler if don't need it anymore
//
// //have to put the function inside a variable
// //can prevent the event and remove it too in side the function
//
// //can put it into a set timeout function
//
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

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

document.querySelector('.nav__link').addEventListener('click', function (e) {
  //in event handler this keyword points to element to which the event handler is attached (left of dot)
  this.style.backgroundColor = randomColor(); //set style background to random colour
  console.log('LINK', e.target, e.currentTarget); // e.currenttarget element to which event is attached
  //e.target where the EVENT originates where the click happened NOT element on which event handler was attached
  console.log(e.currentTarget === this);

  //stop propagation (bubbling up)

  e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();

  //event starts at document root bubbles down to target element and then bubbles up
  //both handles are handling same event
  console.log('CONTAINER', e.target);
  //target is nav link element where click first happened
  //event originated at link and bubbles up can handle event in all parent elements
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    //event handled in all three places
    console.log('NAV', e.target);
    //target is nav link element where click first happened
  },
  true
);
//third parameter in add eventlistner function use capture set to true event will no longer listen to bubbling but capture
//first element event passes through is nav listening for event travelling down from dom
//NAV COMES FIRST
//events captured when coming down from root all the way to the target

//DOM TRAVERSING
//can go up down and sideways

//select h1 element
const h1 = document.querySelector('h1');
//query selector is avaialbe on elements too
//going downwards: child
//select a child elements
//select the two elements with class highlight
console.log(h1.querySelectorAll('.highlight'));
//returns node list returns all elements with highlight class within the h1 element
//it will go down as deep as necessary into dom tree other elements with highlight won't get selected
//won't

//direct children
//use child node nodes can be anything text comment span etc

console.log(h1.childNodes);

console.log(h1.children);
//html collection live collection which is updated

//element child
h1.firstElementChild.style.color = 'white';
//first child of h1 gets set to white

h1.lastElementChild.style.color = 'orangered';

//going upwards: parents

console.log(h1.parentNode);
//h1 is inside header title
//header title dirent parent

console.log(h1.parentElement);
//in this case the same element is also a node

//need element which is not a direct parent find one far away in the dom tree
//multiple elements with class header
h1.closest('.header').style.background = 'var(--gradient-seconday)';

//closest element with header class and sets gradient on it
//if selector matches the element which closest is called on that is what will be returned

h1.closest('h1').style.background = 'var(--gradient-primary)';

//similar to query selector queryelector finds children

//going sideways: siblings

console.log(h1.previousElementSibling); //null nothing there
console.log(h1.nextElementSibling); // next sibling h4 element

//sibling for nodes
console.log(h1.previousSibling);
console.log(h1.nextSibling);

//all siblings move up to parent and read children from there

console.log(h1.parentElement.children); //get all the children

//get all siblings including itself
//iterable html collection spread into array

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    el.style.transform = 'scale(1)';
    //loop through if element is diffrent scale down by changing value of transform property on style object
  }
});

// tabbed component

//three tabs select using query selector all inefficient method
// tabs.forEach(t => t.addEventListener('click'), () => {
//   console.log('TAB');
// }
//use event delegation attach handler to parent element use event target to capture element event came from
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); //dom traversing search for closest operations tab use closest method find closest parent with this class name
  //use data attribute that contains number of the tab whwnever click on span element
  // console.log(clicked);
  //when clicking in tabs container there'll be no parent with that class

  if (!clicked) return; //if clicked is null then return the function immediately guard clause
  //remove active  class on all tabs first then add
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  //give the clicked tab operations tab active class
  clicked.classList.add('operations__tab--active');

  //activate content area using data attribute match the data tab value in the dataset property with the tab element class
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active'); //give active class
  //button stored in clicked variable get value inside dataset property use it to construct template literal and class selector
});

//menu fade animation

//use event delegation and bubble up
nav.addEventListener('mouseover');
