

const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
const taskText = taskInput.value.trim();

if (taskText !== " ") {
const li = document.createElement('li' );
li.textContent = taskText;

taskList.appendChild(li);


taskInput.value = '';
}}









// let data = document.getElementsByClassName("menu")






// let add = document.getElementsByClassName("btn");
// let list = document.getElementsByClassName("list");

// function addItem(){
// let item =  document.createElement("li");
// list.appendChild(item);
// item.innerText = data.value;
// data.value="";

// }

// add.addEventListener("click", addItem);






 
// button.addEventListenter("click" , () =>{

// let newElem = document.createElement("li");
// add.appendChild(newElem);
// newElem.innerText = data.value;

// let newButton = 



// })
//  data.value=""
// })