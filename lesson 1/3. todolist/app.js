// Selecting elements from the DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    // 1. Show an alert if the user has no typed in some text
    // clue: alert("")

    // 2. Create a new list item and appendit to `taskList`
    // clue 
    // const li = document.createElement('li');
    // taskList.appendChild(li);

    // 3. Create a delete button for the task
    // clue: `taskList.removeChild`
    // const deleteBtn = document.createElement('button');
    // li.appendChild(deleteBtn);

    // 4. clear the input field
    console.log(taskText);
}

// Event listener for the "Add Task" button
addTaskBtn.addEventListener('click', addTask);