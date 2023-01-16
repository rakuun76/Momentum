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

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = newToDo.id;
    span.innerText = newToDo.text;
    button.innerText = "X";

    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);

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