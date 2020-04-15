let todoInput = document.querySelector('.todo-input')
let todoButton = document.querySelector('.todo-button')
let todoList = document.querySelector('.todo-list')



//what happens when you click on the add todo button
function addTodo(e) {
    e.preventDefault();

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    saveLocalTodo(todoInput.value)      //saving item to local storage, function is down below

    const completeButton = document.createElement('button')
    completeButton.innerHTML = "<i class='fas fa-check fa-2x'></i>"
    completeButton.classList.add('complete-btn')
    todoDiv.appendChild(completeButton)

    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = "<i class='fas fa-trash fa-2x'></i>"
    deleteButton.classList.add('delete-btn')
    todoDiv.appendChild(deleteButton)
    
    // so user cannot add an empty todo item
    // if (todoInput.value === '') {
    //     alert("You cannot add an empty Todo item")
    // } else {
    //     todoList.appendChild(todoDiv)
    // }
    todoList.appendChild(todoDiv)
    todoInput.value = ''
}

//event listener for the add todo button
todoButton.addEventListener('click', addTodo)


function deleteTodo(e){
    const item = e.target;

    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        todo.remove()
        removeLocalTodos(todo)
    }
    if (item.classList[0]=== 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed')

    }
}
//event listener for the delete todo button
todoList.addEventListener('click', deleteTodo)


// let filterOption = document.querySelector('.filter-todo')

// function filterTodo (e) {
//     const todos = todoList.childNodes;
//     todos.forEach(function(todo) {
//         switch(e.target.value) {
//             case "all":
//                 todo.style.display = 'flex';
//                 break;
//             case "completed":
//                 if(todo.classList.contains('completed')) {
//                     todo.style.display = 'flex';
//                 }else {
//                     todo.style.display = 'none'
//                 }
//                 break;
//                 case "incomplete" :
//                     if(!todo.classList.contains('completed')) {
//                         todo.style.display = 'flex'
//                     }
//                     else {
//                         todo.style.display = 'none'
//                     }
//                     break;
                    
//         }
//     })

//             }

// filterOption.addEventListener('click', filterTodo);

// saving to local storage
function saveLocalTodo(todo) {

    let todos;
    if (localStorage.getItem('todos') === null) {
        todos= [];
    } else {
        todos=JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos= [];
    } else {
        todos=JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach(function(todo){
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')
    
        const newTodo = document.createElement('li')
        newTodo.innerText = todo
        newTodo.classList.add('todo-item')
        todoDiv.appendChild(newTodo)
    
        const completeButton = document.createElement('button')
        completeButton.innerHTML = "<i class='fas fa-check fa-2x'></i>"
        completeButton.classList.add('complete-btn')
        todoDiv.appendChild(completeButton)
    
        const deleteButton = document.createElement('button')
        deleteButton.innerHTML = "<i class='fas fa-trash fa-2x'></i>"
        deleteButton.classList.add('delete-btn')
        todoDiv.appendChild(deleteButton)
        
        // so user cannot add an empty todo item
        // if (todoInput.value === '') {
        //     alert("You cannot add an empty Todo item")
        // } else {
        //     todoList.appendChild(todoDiv)
        // }
        todoList.appendChild(todoDiv)
    
    })
    

}
//event listener for the local storage when the page has loaded

 

//to remove todos from local storage

function removeLocalTodos(todo){
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos= [];
    } else {
        todos=JSON.parse(localStorage.getItem('todos'))
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem('todos', JSON.stringify(todos))

}

document.addEventListener('DOMContentLoaded',getTodos)