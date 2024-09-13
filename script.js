const todoInput=document.getElementById("todo-input-id");
const todoButton=document.getElementById("todo-button-id");
const todoList=document.getElementById("todo-list-id");

todoButton.addEventListener("click",addTodo)

function addTodo(event){
    event.preventDefault();
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo=document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const completeButton=document.createElement("button");
    completeButton.innerHTML='<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    const trashButton=document.createElement("button");
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value="";

}