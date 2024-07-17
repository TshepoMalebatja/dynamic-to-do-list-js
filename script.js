document.addEventListener('DOMContentLoaded', function() {
    // Selecting DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get the task text from input and trim whitespace
        let taskText = taskInput.value.trim();

        // Check if the task input is not empty
        if (taskText !== '') {
            // Create new list item
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            // Create remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            // Add click event to remove button
            removeButton.addEventListener('click', function() {
                listItem.remove();
            });

            // Append remove button to list item
            listItem.appendChild(removeButton);

            // Append list item to task list
            taskList.appendChild(listItem);

            // Clear task input
            taskInput.value = '';
        } else {
            // Alert if task input is empty
            alert('Please enter a task!');
        }
    }

    // Event listener for add button click
    addButton.addEventListener('click', addTask);

    // Event listener for 'Enter' key press in task input
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
// Function to load tasks from Local Storage
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

// Event listener for page load
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    // Add other initialization code as needed
});
// Function to add a new task
function addTask(taskText, save = true) {
    // Create new list item
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

    // Add click event to remove button
    removeButton.addEventListener('click', function() {
        listItem.remove();
        updateLocalStorage();
    });

    // Append remove button to list item
    listItem.appendChild(removeButton);

    // Append list item to task list
    taskList.appendChild(listItem);

    // Clear task input
    taskInput.value = '';

    // Save task to Local Storage if specified
    if (save) {
        saveTask(taskText);
    }
}

// Function to save task to Local Storage
function saveTask(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
}

// Function to update Local Storage after task removal
function updateLocalStorage() {
    const tasks = [];
    document.querySelectorAll('#task-list li').forEach(task => {
        tasks.push(task.textContent.trim());
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
