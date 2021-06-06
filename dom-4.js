var form=document.getElementById('addForm')
var itemList=document.getElementById('items')
var filter =document.getElementById('filter')

//form submit event
form.addEventListener('submit',addItem)

//Delete event 
itemList.addEventListener('click',removeEvent)

//filter event
filter.addEventListener('keyup',filterItems)

//Add Item
function addItem(e){
    e.preventDefault()

    //get input value
    var newItem=document.getElementById('item').value

    //create a new li element
    var li=document.createElement('li')
    //Add class
    li.className='list-group-item'
    // console.log(li);
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem))

    //create delete button element
    var deleteBtn=document.createElement('button')
    //Add classes to del btn
    deleteBtn.className='btn btn-danger btn-sm float-right delete'
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'))
    //Append button to li
    li.appendChild(deleteBtn)

    //Append li to list
    itemList.appendChild(li)

}

//Remove item
function removeEvent(e){
    // console.log(1);
    if(e.target.classList.contains('delete')){
        // console.log(1);
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

//Filter items
function filterItems(e){
    //convert text to lowercase
    var text=e.target.value.toLowerCase()
    // console.log(text);
    //GET LIST
    var items=itemList.getElementsByTagName('li')
    // console.log(items);
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent
        // console.log(itemName);
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block'
        }
        else{
            item.style.display='none'
        }
    })
}