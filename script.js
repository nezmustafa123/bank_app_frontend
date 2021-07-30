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

//CSS STYLES

//styles on element element style and property name using camel case

//select element and style property and property name set it to string with value
message.style.backgroundColor = '#37383d';
message.style.width = '1200px'; //have to write the css value in a string the same way you'd write it in normal css

//in style attribute of element inline styles
//can't read properties unless you set them
console.log(message.style.height);
//will work with background color because was set manually
//can't do

console.log(message.style.color);

console.log(message.style.backgroundColor);
//will return rgb color because was one that was set manually
//get styles using getComputsedStyle
console.log(getComputedStyle(message).color); //real style as it appears in page
//get object with all the properties with all values then take certain
console.log(getComputedStyle(message).height); //can get the computed style even if didn't set it in css returns the height

//increase the height by 40 pixels

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 3 + 'px'; //specify base 10

//adding 'px' to the height will turn it into string have to turn it back to number

//have to parseFloat as the message height is a string/floating point number take number out of string

//defined in document root equivalent to document in javascript
//change color of root variables css variables using document element using set property
document.documentElement.style.setProperty('--color-primary', 'orangered');
//pass in name of property as a string and value
//change primary colour to orange red
//every where in style blue colour turns orange

//can use set property for other stuff too

//select and change attributes

const logo = document.querySelector('.nav__logo'); //select logo

//select the alt and source attribute javascript creates property on the object

console.log(logo.alt);
console.log(logo.src); //absolute url
//imgs have alt and src attributes already
//javascript will screat ptoperty on object
//if attribute on element doesn't exist it wont

//set attriubutes using the dot notation

logo.alt = 'Minimalist logo';

console.log(logo.designer);
//not property expected to be on images

//to get class have to write class name

console.log(logo.className);

//to read non standard properties you add use

console.log(logo.getAttribute('designer')); //Nez

//use set attribute method

logo.setAttribute('company', 'Bankist');
//creat attribute called company set it to banksit

//to get relative url of pgoto
logo.getAttribute('src');
