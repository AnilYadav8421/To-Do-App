//select variable
const inputBox = document.getElementById('input-box');
const listcontainer = document.getElementById('List-container');

//function
function addTask(){
    //it check input field is empty
    if(inputBox.value === ''){
        alert('You have to write something')
    }
    else{
        //to add elements in html and display it.
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);

        //add x in html
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'
        li.appendChild(span);
    }
    //this to remove the text after the elements is added
    inputBox.value = '';
    saveData();
}
//to perform toggle and delete of li
listcontainer.addEventListener('click', function(a){
    if(a.target.tagName === 'LI'){
        a.target.classList.toggle('check');
        saveData();
    }
    else if(a.target.tagName === 'SPAN'){
        a.target.parentElement.remove();
        saveData();
    }
}, false)

//function to store in browser so it should not delete when page is refresh.
function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

//function to display the store data of browser.
function showData(){
    listcontainer.innerHTML = localStorage.getItem('data');
}
showData();