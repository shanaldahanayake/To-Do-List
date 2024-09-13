const todoInput=document.getElementById("todo-input-id");
const todoButton=document.getElementById("todo-button-id");
const todoList=document.getElementById("todo-list-id");
const filterOption=document.getElementById("filter-todo-id");

todoButton.addEventListener("click",addTodo)
todoList.addEventListener("click",deletCheck)
filterOption.addEventListener("click",filtertodDo)

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

function deletCheck(e){
    
    const item=e.target;
    if(item.classList[0]==='trash-btn'){
        const todo=item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend",()=>{
            todo.remove();
        })

    }

    if(item.classList[0]==='complete-btn'){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }

}

function filtertodDo(e){ 
    const todos=todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display="flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display="flex";
                }    else{
                    todo.style.display="none";
                }
                break;

            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display="flex";
                }    else{ 
                    todo.style.display="none";
                }  
                break;   
        }
    });
}