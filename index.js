// Get elements
const addTaskBtn = document.getElementById('addTaskBtn');
const deleteAllBtn = document.getElementById('deleteAllBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add Task
addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.className = 'list-group-item';

    const span = document.createElement('span');
    span.textContent = taskText;

    const btnGroup = document.createElement('div');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'btn btn-warning btn-sm me-2';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'btn btn-danger btn-sm';

    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnGroup);

    taskList.appendChild(li);
    taskInput.value = '';

    // Toggle complete
    span.addEventListener('click', function() {
        span.classList.toggle('completed');
    });

    // Edit task
    editBtn.addEventListener('click', function() {
        const newText = prompt('Edit your task:', span.textContent);
        if (newText !== null && newText.trim() !== '') {
            span.textContent = newText.trim();
        }
    });

    // Delete single task
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
});

// Delete all tasks
deleteAllBtn.addEventListener('click', function() {
    taskList.innerHTML = '';
});
