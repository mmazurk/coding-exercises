
const tasklist = document.getElementById('tasklist');
const form = document.getElementById('form');
const textinput = document.getElementById('textinput');
const submitbutton = document.getElementById('submitbutton');

// rebuild the page from local storage

if (localStorage.length === 0) {
    savedList = [];
} else {
    savedList = JSON.parse(localStorage.getItem('todo_list'))
}

let li_load;
for (i = 0; i < savedList.length; i++) {
    li_load = document.createElement('li');
    li_load.innerText = savedList[i].taskText;
    li_load.isCrossedOut = savedList[i].isCrossedOut;
    let onload_button = document.createElement('button');
    onload_button.innerText = "Remove";
    onload_button.setAttribute('id', 'removebutton')
    li_load.append(onload_button);
    tasklist.appendChild(li_load);
}

// handle the form submission event
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let new_li = document.createElement('li');
    new_li.innerText = textinput.value;
    new_li.isCrossedOut = false;
    let new_button = document.createElement('button');
    new_button.innerText = "Remove";
    new_button.setAttribute('id', 'removebutton')
    new_li.appendChild(new_button);
    tasklist.appendChild(new_li);

    // save to local storage
    let li_object = { taskText: textinput.value, isCrossedOut: false };
    savedList.push(li_object);
    localStorage.setItem("todo_list", JSON.stringify(savedList));
    textinput.value = "";

});

// handle the click event
tasklist.addEventListener('click', function (event) {

    // if you click the bullet, then apply the crossed out style
    if (event.target.tagName === "LI") {
        event.target.style.textDecoration = "line-through";
        event.target.isCrossedOut = true;

        // TO DO: update local storage to reflect the change
        // find the array object that matches the target taskText
        // event.target.childNodes[0].nodeValue
            
        console.log(event.target.childNodes[0].nodeValue)
        
        // now update your local array, savedList to indicate strikethrough
        // and then update local storage as above
        
    }
    // if you click the button you remove the item
    if (event.target.tagName === "BUTTON") {

        // TO DO: update local storage to reflect the change
        // find the array object that matches the target taskText
        // event.target.childNodes[0].nodeValue
        // now update your local array, savedList to indicate remove
        // update local storage as above

        // now remove node from the page
        event.target.parentNode.remove();
    }

})