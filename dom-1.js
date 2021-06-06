/** PART 1- DOM */

document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector()
document.querySelectorAll()

//EXAMINE THE DOCUMENT OBJECT

// console.dir(document);
// console.log(document.domain); //127.0.0.1
// console.log(document.URL); //http://127.0.0.1:5500/DOM-elements/index.html?
// console.log(document.title); //Item Lister
// // document.title=123
// console.log(document.doctype); //<!DOCTYPE html>
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent='hello'
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);
//  console.log(document.images);

//GETELEMENTBYID//SELECTORS
// console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title')
// var header=document.getElementById('main-header')

// console.log(headerTitle);
// //To change the text
// headerTitle.textContent ='Hello'
// headerTitle.innerText='Goodbye'
// console.log(headerTitle.textContent);
// headerTitle.innerHTML='<h3>Hello</h3>'

//CHANGE CSS STYLES HERE
// header.style.borderBottom='solid 3px #000'

//GETELEMENTSBYCLASSNAME //
// var items=document.getElementsByClassName('list-group-item')
// console.log(items);
// console.log(items[1]);

// //change the text of list of particular item
// items[1].textContent='Hello 2'
// items[1].style.fontWeight='bold'
// items[1].style.backgroundColor='yellow'

// //not works //Gives Errors
// // items.style.backgroundColor='#f4f4f4'

// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor='#f4f4f4'
// }

//GETELEMENTSBYTAGNAME//
// var li=document.getElementsByTagName('li')
// console.log(li);
// console.log(li[1]);

// //change the text of list of particular item
// li[1].textContent='Hello 2'
// li[1].style.fontWeight='bold'
// li[1].style.backgroundColor='yellow'

// //not works //Gives Errors
// // items.style.backgroundColor='#f4f4f4'

// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor='#f4f4f4'
// }

//QUERYSELECTOR// WORKS LIKE JQUERY
  
// var header=document.querySelector('#main-header')
// header.style.borderBottom='solid 4px #ccc'

// var input=document.querySelector('input')
// input.value='hello world'

// var submit=document.querySelector('input[type="submit"]')
// submit.value="SEND"

// var item=document.querySelector('.list-group-item')
// item.style.color='red'

// //pseudo selectors
// var lastItem=document.querySelector('.list-group-item:last-child')
// lastItem.style.color='blue'


// var secondItem=document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color='coral'

// var thirdItem=document.querySelector('.list-group-item:nth-child(3)')
// thirdItem.style.color='green'

// QUERY SELECTORALL// WORKS SIMILAR TO GETELEMENTSBYTAGNAME

var titles=document.querySelectorAll('.title')
console.log(titles);
// titles[0].textContent='hello'

//pesudo selector
var odd=document.querySelectorAll('li:nth-child(odd)')
var even=document.querySelectorAll('li:nth-child(even)')

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='#f4f4f4'
    even[i].style.backgroundColor='#ccc'
}