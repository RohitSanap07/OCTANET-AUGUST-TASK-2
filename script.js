// Select DOM elements
const taskInput = document.getElementById('new-task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add a new task
addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
    }
});

// Add task to the list
function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    
    const taskButtons = document.createElement('div');
    taskButtons.className = 'task-buttons';
    
    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
        const newTaskText = prompt('Edit your task', taskContent.textContent);
        if (newTaskText) {
            taskContent.textContent = newTaskText.trim();
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskButtons.appendChild(completeBtn);
    taskButtons.appendChild(editBtn);
    taskButtons.appendChild(deleteBtn);
    
    taskItem.appendChild(taskContent);
    taskItem.appendChild(taskButtons);
    
    taskList.appendChild(taskItem)
}