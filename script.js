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
