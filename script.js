'use strict';

///////////////////////////////////////
// Modal window
const header = document.querySelector('.header');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const allButtons = document.getElementsByTagName('button'); //get element by tag name all elements with tagname button
const allSections = document.querySelectorAll('.section');
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
  const section1coords = section1.getBoundingClientRect(); //returns object that has coordinates properties from left side x and y position mesaured from top
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
  // console.log(e.target); // use target to see where event happened work with click that happened on one of the links

  //matching classlist strategy

  if (e.target.classList.contains('nav__link')) {
    // if class contains nav link fires otherwise doesn't
    e.preventDefault(); //prevent default scroll/jump to section to implement scrolling
    // console.log('LINK');
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
// console.log(document.documentElement);
// //select the whole document

// //select the head and body
// console.log(document.head);
// console.log(document.body);

//first element that matches selector here
//every element
// console.log(allSections);
//returns node list containing all the elements with the class selection

//most used ways of selecting elements
//also available on all the elements to use

document.getElementById('section--1'); //don't need selector

// console.log(allButtons); //tag name returns html collection instead of nodelist live collection

//if dom changes the html collection is updated automatically
//eg remove element in inspector

//node list doesn't update itself in the console when deleted

// console.log(document.getElementsByClassName('btn'));
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
//math.random is between 0....1 -> multipy by max(min) get a number between 0...(max-min) -> add min to both sides and cancel min...(max-min + min) min.. max
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
  //in event handler 'this' keyword points to element to which the event handler is attached (left of dot)
  this.style.backgroundColor = randomColor(); //set style background to random colour
  //console.log('LINK', e.target, e.currentTarget); // e.currenttarget element to which event is attached
  //e.target where the EVENT ORIGINATES where the click happened NOT element on which event handler was attached
  // console.log(e.currentTarget === this);

  //stop propagation (bubbling up)

  e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();

  //event starts at document root bubbles down to target element and then bubbles up
  //both handles are handling same event
  //console.log('CONTAINER', e.target, e.currentTarget);
  //target is nav link element where click first happened
  //event originated at link and bubbles up can handle event in all parent elements
});

document.querySelector('.nav').addEventListener(
  //event bubbling
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    //event handled in all three places
    // console.log('NAV', e.target);
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
// console.log(h1.querySelectorAll('.highlight'));
//returns node list returns all elements with highlight class within the h1 element
//it will go down as deep as necessary into dom tree other elements with highlight won't get selected
//won't

//direct children
//use child node nodes can be anything text comment span etc

// console.log(h1.childNodes);

// console.log(h1.children);
//html collection live collection which is updated

//element child
h1.firstElementChild.style.color = 'white';
//first child of h1 gets set to white

h1.lastElementChild.style.color = 'white';

//going upwards: parents

//console.log(h1.parentNode);
//h1 is inside header title
//header title dirent parent

//console.log(h1.parentElement);
//in this case the same element is also a node

//need element which is not a direct parent find one far away in the dom tree
//multiple elements with class header
// h1.closest('.header').style.background = 'var(--gradient-seconday)';

//closest element with header class and sets gradient on it
//if selector matches the element which closest is called on that is what will be returned

// h1.closest('h1').style.background = 'var(--gradient-primary)';

//similar to query selector queryelector finds children

//going sideways: siblings

//console.log(h1.previousElementSibling); //null nothing there
//console.log(h1.nextElementSibling); // next sibling h4 element

//sibling for nodes
//console.log(h1.previousSibling);
//console.log(h1.nextSibling);

//all siblings move up to parent and read children from there

//console.log(h1.parentElement.children); //get all the children

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
  //console.log(clicked);
  //when clicking in tabs container there'll be no parent with that class

  if (!clicked) return; //if clicked is null then return the function immediately guard clause
  //remove active  class on all tabs first then add
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  //give the clicked tab operations tab active class
  clicked.classList.add('operations__tab--active');

  //activate content area using data attribute match the data tab value in the dataset property with the tab element class
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`) //the end of operations content clas will match with button data-tab value
    .classList.add('operations__content--active'); //give active class
  //button stored in clicked variable get value inside dataset property use it to construct template literal and class selector
});

//menu fade animation

//use event delegation and bubble up
//mouse enter does NOT bubble up

const handleHover = function (e, opacity) {
  //create parameter for opacity

  //attach handler to parent element
  if (e.target.classList.contains('nav__link')) {
    //find the element with the nav link class
    //don't need closest method like in tabs no child elements to accifentally click
    //put element inside link variable
    const link = e.target;

    //select sibling elements move up two levels use closet method

    //search for parent that matches query find closest parent with nav class
    //can also choose an even higher up parent in this case choosing the main nav
    //then within it choose all the nav links
    const siblings = link.closest('.nav').querySelectorAll('.nav__');
    const logo = link.closest('.nav').querySelector('img');
    //siblings will contain initial link so need to make sure it's not target
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
        //change the opacity of all the other links to 0,5 or 1 depending on this keyword
      }
    });
    logo.style.opacity = this;
  }
};

// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// }); //opacity 0.5 in this case can't pass in parameters because will call straight away
// //javascript expects a function not a function to be called no value returned
// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// }); // opacity 1 in this case

//use bind method create copry of function called on and sets this keyword to whatever pass into the function bind will not call function but will return new one with this keyword set to whatever you pass in
nav.addEventListener('mouseover', handleHover.bind(0.5)); //opacity 0.5 in this case can't pass in parameters because will call straight awaay
//javascript expects a function not a function to be called no value returned
nav.addEventListener('mouseout', handleHover.bind(1)); // opacity 1 in this case
//use this keyword in function this keyword is now opacitty
//pass "argument" into handler using bind handler function can only take one argument

//sticky navigation

//make navigation sticky in a certain position give it transparnt background
// const initialCoords = section1.getBoundingClientRect();
// //get coordinates of initial section position position

// //use scroll event available on window addevent listener
// //event will be fired each time page is scrolled
// window.addEventListener('scroll', function (e) {
//   //console.log(e); //scroll event fired all the time not good for smartphones
//   //console.log(window.scrollY); // distance from viewport to top of the page
//   //on window object
//   //when reach the position of the section make sticky, determine position of the first section
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

//intersection observer api
//allows code to oserve changes in way target element intersects other element or viewport
// const obsCallback = function (entries, observer) {
//   //function called with two arguments entries and observer object itself
//   //entries is an array of threshold entries equal to value of the threshold property
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   //root is element target element will intersect
//   root: null,
//   thresHold: [0, 0.2], //when 10% of the target element is within viewport callback will be called minimum percentage of target elmeent that has to be in viewport for callback to fire
// }; //callback will trigger when target moves out of view and enters the view
// const observer = new IntersectionObserver(obsCallback, obsOptions); //pass in callback function and options object
// observer.observe(section1);
//use observer object call observe method on it input section
//section is target element viewport is root element whenever target intersects viewport at 10% the function will get called
//when target element intersects viewport intersection observer entry appears

//when header moves out of view make the navigation sticky

// const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height; //get height property in client rect object
//get the nav height dynamically instead of hardcode
const stickyNav = function (entries) {
  const [entry] = entries; //destructure the first one
  // console.log(entry);
  //if entry intersecting property is false then add sticky, when header out the viewport
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  //stickynav callback
  root: null, //root null viewport
  threshold: 0, //when header is invisible run function
  rootMargin: `-${navHeight}px`, // template literal margin of -90 pixels as if the header stops 90 pixels before 90 pixels is height
});

headerObserver.observe(header);

//reveal element on scroll
//section hidden class
//reveal sections
//select all sections

const revealSection = function (entries, observer) {
  //call back function paremeters can have any name
  const [entry] = entries; //one threshold get it via destrucuting
  // console.log(entries);
  // console.log(entry);

  if (!entry.isIntersecting) return;
  //use guard clause if entry isn't intersecting then return the function
  //find out which section intersects viewport
  entry.target.classList.remove('section--hidden');

  //unobserve

  observer.unobserve(entry.target);
  //unobserve element which is contained in entry.target
  //sections won't be observe and come in and out anymore
};
//observe all sections using one observer
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null, //root will be viewport
  threshold: 0.1,
});

//loop through nodelist using foreach for each use observer to observe each section
allSections.forEach(function (section) {
  sectionObserver.observe(section); // each section is the target
  // section.classList.add('section--hidden');
});

//lazy loading images for performance
//load low resolution image first then replace it with one that is specified in data source attribute

//remove class filter that makes image blurred
//ones that will be lazy loaded are ones with data source
//select elements that contain that property
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  //replace src with data-src

  //each image is at entry.target
  //special value stored at dataset property
  //entry element being intersected
  entry.target.src = entry.target.dataset.src; //look inside dataset property for custom src attribute
  //entry target is features__img lazy-img
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
    //remove lazy image class when that element is loaded
  });

  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
//attach image observer to all targets

imgTargets.forEach(img => imgObserver.observe(img));

//silder componnent

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

let curSlide = 0; //current slide start at 0
let maxSlide = slides.length; //read node lists like on an array max slide you can go to
//loop through slides for each slide style transform translate
//scale down slider
// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(1) translateX(0)';
// slider.style.overflow = 'visible';

// slides.forEach(
//   (slide, i) => (slide.style.transform = `translateX(${100 * i}%)`)
// );
//multiply 100% by current index of element in slides node list inside the translate x function translate x will shift them a position of 100% of the width in the x axis
// 0%, 100%, 200%, 300%

//refactoring pass in the number of the slide into a seperate function
//organise slider code into funcitions

//FUNCTIONS
const createDots = function () {
  //dots have data-slide attribute
  //create one element for each slide
  slides.forEach(function (_, i) {
    //each button will have dots_dot class use throwaray varuable only need index
    //for each slide create dynamic html each dot is one element will class dots_dot

    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class = "dots__dot" data-slide="${i}"></button>` //insert html code with index first button index 0 1 2 3  move to correct slide once dots is clicked
    );
  });
};

//function to change active slide
const activateDot = function (slide) {
  //pass in current slide select all dots first and remove active class then add
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active')); //remove active class for each dot

  //select one that is needed based off data attribute
  //use square brackets to select data-slide attribute template literal and quote mixture should have value of slide
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
  //eg pass in slide 2 active dot corresponding to slide 2
};
// activateDot(0);
const goToSlide = function (slide) {
  slides.forEach(
    //update transform property on all slides
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`) //leeps going have to define number of slides till it stops
  );
  //if curslide is 1  i = 0 0-1 is -1 -1 * 100 = -100
  //curSlide = 1; -100%, 0%, 100%, 200%
  // 0 -1 when cur slide is 1 and index is 1 1-1 is 0 so will be in the middle
};

//call go to slide straight away when starting with slide set to zero
//i - 0 is just i so it's the same as the code commented out
// goToSlide(0);

//next slide change percentage so the slide wish to move to has zero percent

const nextSlide = function () {
  //no parameters needed
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
    //return to beginning of slide
  } else {
    curSlide++;
  }

  goToSlide(curSlide); //call go to slide with curSlide
  activateDot(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1; //if current slide aldready 0 cur slide becomes 4-1 = 3
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};
const init = function () {
  goToSlide(0);
  createDots();
  activateDot(0);
};
init();
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

//handle keyboard events

document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide(); //short circuiting
});
// when hitting right arrow key key in event object is arrow right
// when hitting left arrow key key in event object is arrow left

//use event delegation

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    console.log(e.currentTarget);
    const { slide } = e.target.dataset; //use slide attribute from dataset property in event object
    //destructure reading from object
    console.log(slide);
    //go to slide that read from dataset

    goToSlide(slide);
    activateDot(curSlide);
  }
});

//life cycle dom events
//on content load
//will fire when html parsed and converted to dom tree
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!'); //just html and javascript need to be loaded
});
//if have script tab don't have to use dom content loaded

//same as document.ready in javascript

//load event fired by window as soon as html is passed asn external resource is loaded

window.addEventListener('load', function (e) {
  console.log('Page fully loaded');
});

window.addEventListener('beforeunload', function (e) {
  //as users leave the page
  e.preventDefault(); //need to prevent default for broswers
  // console.log(e);
  e.returnValue = ''; //leaving condition generic message
});

//defer and aync attributes to add javascript influence the way javascript is downloaded and executed

//using defer in html head is the best solution
//include library before script using defer and async
//for thrid party scripts where order doesn't matter eg google analytics use async
