document.querySelector('.button').addEventListener('click', () =>{
    const myInput = document.querySelector('.input');
    const value = myInput.value.trim();
    if(!value) {
        return;
    }

    const toDoList = document.querySelector('.todo-list');

    const newTask = document.createElement('li');

    newTask.textContent = value;

    newTask.classList.add('new-task');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'delete';
    deleteBtn.addEventListener('click', () => {
        newTask.classList.add('delete');
    });

    newTask.appendChild(deleteBtn);

    toDoList.appendChild(newTask);

    myInput.value = '';
})




