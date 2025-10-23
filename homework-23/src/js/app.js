document
    .querySelector('.button')
    .addEventListener('click', () => {
        const myInput = document.querySelector('.input');
        const value = myInput
            .value
            .trim();
        if (!value) {
            return;
        }

        const toDoList = document.querySelector('.todo-list');

        const newTask = document.createElement('li');

        newTask.textContent = value;

        newTask
            .classList
            .add('new-task', 'todo-item');

        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn
            .className = 'icon-btn btn-danger';
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
        addToImmediateBtn
            .className = 'icon-btn add-to-immediate';
        addToImmediateBtn.textContent = 'add to immediate';
        addToImmediateBtn.addEventListener('click', () => {
            immediateList.appendChild(newTask);
            newTask
                .classList
                .remove('completed', 'delete');
                addToImmediateBtn.classList.add('hidden')
        });

        newTask.appendChild(addToImmediateBtn)

        const complitedList = document.querySelector('.complited-list')

        const addToComplitedBtn = document.createElement('button')
        addToComplitedBtn.type = 'button';
        addToComplitedBtn
            .className = 'icon-btn add-to-complited';
        addToComplitedBtn.textContent = 'add to complited';
        addToComplitedBtn.addEventListener('click', () => {
            complitedList.appendChild(newTask);
            addToComplitedBtn.classList.add('hidden');
            addToImmediateBtn.classList.remove('hidden');
            newTask
                .classList
                .add('completed');
        })

        newTask.appendChild(addToComplitedBtn);

        toDoList.appendChild(newTask);
        myInput.value = '';
        myInput.focus();
    })
