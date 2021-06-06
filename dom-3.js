//Event listener

//onClick
//This is 1 way of creating function
    // var button=document.getElementById('button').addEventListener
    // ('click',function(){
    //     console.log(123);
    // })

//This is 2nd way of creating function

// // EVENTS //
// var button=document.getElementById('button').addEventListener
// ('click',buttonClick)  //calling the function

// function buttonClick(e){
//     // console.log('Button Clicked');
//     // document.getElementById('header-title').textContent='Changed'
//     // document.querySelector('#main').style.backgroundColor='gray'
//     // console.log(e);
//     // console.log(e.target); //gives us the actual element that is clicked
//     // //get id
//     // console.log(e.target.id);
//     // //get class
//     // console.log(e.target.className);

//     // console.log(e.target.classList);

//     // var output=document.getElementById('output')
//     // output.innerHTML='<h3>'+e.target.id+'</h3>'

//     // console.log(e.type); //click

//     // console.log(e.clientX);
//     // console.log(e.clientY);

//     // console.log(e.offsetX);
//     // console.log(e.offsetY);

//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftKey);
// }


var button=document.getElementById('button')
var box=document.getElementById('box')


// button.addEventListener('click',runEvent)  //calling the function  

// button.addEventListener('dblclick',runEvent)  //calling the function  
// button.addEventListener('mousedown',runEvent)  //calling the function  
// button.addEventListener('mouseup',runEvent)  //calling the function  

    // box.addEventListener('mouseenter',runEvent)
    // box.addEventListener('mouseleave',runEvent)

    // box.addEventListener('mouseover',runEvent)
    // box.addEventListener('mouseout',runEvent)

    // box.addEventListener('mousemove',runEvent)

    var itemInput=document.querySelector('input[type="text"]')
    var form=document.querySelector('form')
    var select=document.querySelector('select')

    // itemInput.addEventListener('keydown',runEvent)
    // itemInput.addEventListener('keyup',runEvent)
    // itemInput.addEventListener('keypress',runEvent)

    // itemInput.addEventListener('focus',runEvent)
    // itemInput.addEventListener('blur',runEvent)

    // itemInput.addEventListener('cut',runEvent)
    // itemInput.addEventListener('paste',runEvent)

    // itemInput.addEventListener('input',runEvent)

    // itemInput.addEventListener('paste',runEvent)

    // select.addEventListener('change',runEvent)
    // select.addEventListener('input',runEvent)

form.addEventListener('submit',runEvent)


function runEvent(e){
    e.preventDefault()
    console.log('EVENT TYPE:'+e.type);
    // document.body.style.display='none'
    // output.innerHTML = '<h3>MouseX: ' + e.offsetX + ' </h3><h3>MouseY: ' + e.offsetY + '</h3>';
    
    // box.style.backgroundColor = 'rgb(' + e.offsetX + ', ' + e.offsetY + ', 40)';
    // document.body.style.backgroundColor = 'rgb(' + e.offsetX + ', ' + e.offsetY + ', 40)';

 console.log(e.target.value);
    // document.getElementById("output").innerHTML =  "<h3>" + e.target.value + "</h3>";
}