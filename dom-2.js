// You can use the following node properties to navigate between nodes with JavaScript:

// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling
//  PART -2
 //TRAVERSING THE DOM

var itemList=document.querySelector('#items')
//parent node property
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes) // the text nodes are the line breaks in formatting...

//children
// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor='yellow'

// //FirstChild 
// console.log(itemList.firstChild) //just like childNodes this gives us the formatting linebreaks

// //firstelementChild
// console.log(itemList.firstElementChild); //gives actual li
// itemList.firstElementChild.textContent='Hello 1'

// //lastChild
// console.log(itemList.lastChild) //just like childNodes this gives us the formatting linebreaks

// //firstelementChild
// console.log(itemList.lastElementChild); //gives actual li
// itemList.lastElementChild.textContent='Hello 4'


//siblings
//nextSibling
// console.log(itemList.nextSibling) //text

// //nextElementSibling
// console.log(itemList.nextElementSibling) //text

//previousSibling
// console.log(itemList.previousSibling) //text
// //previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='pink'

//creating
//createElement

// Create a div
var newDiv =  document.createElement('div');

// Add class
newDiv.className= 'hello';

// Add id
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);
console.log(newDiv.appendChild(newDivText));

var container = document.querySelector('header .container');
console.log(container);
var h1 = document.querySelector('header h1');
console.log(h1);

newDiv.style.fontSize = '30px';

console.log(newDiv);
 
container.insertBefore(newDiv,h1)

