const todoList = document.querySelector("#todo-list");

const SHOW = "showScroll";
const HIDE = "hideScroll";

function handleMouseEnter(event){
    todoList.classList.add(SHOW);
    todoList.classList.remove(HIDE);
}

function handleMouseLeave(){
    todoList.classList.add(HIDE);
    todoList.classList.remove(SHOW);
}

todoList.addEventListener("mouseenter", handleMouseEnter);
todoList.addEventListener("mouseleave", handleMouseLeave);