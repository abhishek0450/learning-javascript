const body = document.body;

//append is used to add
//append is used to add text or html elements
//append can add multiple elements
//append cn add multiple text or elements
/*
body.append("Hello World!");  
body.append(document.createElement('div'));
*/

/*
const div = document.createElement('div');
//add text to the div
div.innerText = "Hey!";
div.textContent = "Bro "; //same as innerText, but it shows the text even if it is hidden {display: none}
*/

//appenChild is used to add html elements only
//appendChild can add only one element
/*
body.appendChild(document.createElement('div')); 
*/

/*
//modify the text of the div
const strong = document.createElement('strong');
strong.innerText = "Hello World!";
div.append(strong);

//dont do this as it causes security issues
div.innerHTML = "<strong>Hello World!</strong>";
*/

//used to select the first div element
const div = document.querySelector('div');

//used to select the element with id = span1
const span1 = document.querySelector('#span1'); 
//used to select the element with id = span2
const span2 = document.querySelector('#span2');

// //remove the span1
// span1.remove();
// //add itt again
// div.append(span1);

/*
//Modiying elements attributes


*/
//shows the id of the attribute
console.log(span1.getAttribute('id')); 
//changes the id of the attribute
console.log(span1.setAttribute('id', 'newId'))

//classes
span1.classList.add('newClass');
span1.classList.remove('newClass');
//toggle - add if not present, remove if present
span1.classList.toggle('newClass');
//using boolean value to toggle
//true - add, false - remove
span1.classList.toggle('newClass', true);

//style property - used to modify the css properties
span1.style.color = "red";
span2.style.backgroundColor = "blue"; //changes to camelCase


body.append(div); 
