const taskForms = document.getElementById('task-form');

const tasklist = document.getElementById('task-list');

taskForms.addEventListener('submit', (e) => {
    e.preventDefault();
});

const taskInput = document.getElementById('task-input');

const task = task.taskInput