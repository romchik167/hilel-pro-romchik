const API_URL = 'http://localhost:3000';

function renderTask(task) {
    const toDoList = document.querySelector('.todo-list');
    const newTask = document.createElement('li');
    newTask.textContent = task.text;
    newTask.classList.add('new-task', 'todo-item');

    toDoList.appendChild(newTask);
}

document
    .querySelector('.button')
    .addEventListener('click', async () => {
        try {
            const input = document.querySelector('.input');
            const text = input
                .value
                .trim();
            if (!text) 
                return;
            
            const response = await fetch(`${API_URL}/tasks`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({text})
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const task = await response.json();
            console.log('task created:', task);

            const toDoList = document.querySelector('.todo-list');

            const newTask = document.createElement('li');

            newTask.textContent = text; 

            newTask
                .classList
                .add('new-task', 'todo-item');

            const deleteBtn = document.createElement('button');
            deleteBtn.type = 'button';
            deleteBtn.className = 'icon-btn btn-danger';
            deleteBtn.textContent = 'delete';
            deleteBtn.addEventListener('click', () => {
                newTask
                    .classList
                    .add('deleted');
            });
            newTask.appendChild(deleteBtn);

            const immediateList = document.querySelector('.todo-list-immediate');

            const addToImmediateBtn = document.createElement('button');
            addToImmediateBtn.type = 'button';
            addToImmediateBtn.className = 'icon-btn add-to-immediate';
            addToImmediateBtn.textContent = 'add to immediate';
            addToImmediateBtn.addEventListener('click', () => {
                immediateList.appendChild(newTask);
                newTask
                    .classList
                    .remove('completed', 'delete');
                addToImmediateBtn
                    .classList
                    .add('hidden')
            });

            newTask.appendChild(addToImmediateBtn)

            const complitedList = document.querySelector('.complited-list')

            const addToComplitedBtn = document.createElement('button')
            addToComplitedBtn.type = 'button';
            addToComplitedBtn.className = 'icon-btn add-to-complited';
            addToComplitedBtn.textContent = 'add to complited';
            addToComplitedBtn.addEventListener('click', () => {
                complitedList.appendChild(newTask);
                addToComplitedBtn
                    .classList
                    .add('hidden');
                addToImmediateBtn
                    .classList
                    .remove('hidden');
                newTask
                    .classList
                    .add('completed');
            })

            newTask.appendChild(addToComplitedBtn);

            toDoList.appendChild(newTask);
            input.value = '';
            input.focus();
        } catch (error) {
            console.error('error:', error);
        }
    });

async function loadTasks() {
    const res = await fetch('http://localhost:3000/tasks');
    const tasks = await res.json();
    tasks.forEach(renderTask);
}

loadTasks();

async function addTask(text) {
    const res = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({text})
    });

    const newTask = await res.json();
    renderTask(newTask)
};