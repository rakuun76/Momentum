const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
//const toDoInput = toDoForm.querySelector("input");도 가능
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//왜 let으로 했는지 생각
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();

    toDos = toDos.filter(toDO => toDO.id !== parseInt(li.id));
    saveToDos();
}

function checkToDo(event){
    const li = event.target.parentElement;
    li.classList.add("checked");
    setTimeout(deleteToDo, 500, event);
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const checkbox = document.createElement("input");

    li.id = newToDo.id;
    span.innerText = newToDo.text;
    checkbox.type = "checkbox";

    checkbox.addEventListener("click", checkToDo);

    li.appendChild(checkbox);
    li.appendChild(span);

    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    //id를 주는 이유에 대해 생각
    const newToDoObj = {
        id: Date.now(),
        text: newToDo
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;   
    parsedToDos.forEach(paintToDo);
}