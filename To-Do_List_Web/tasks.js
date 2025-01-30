const currentUser = localStorage.getItem("currentUser");
if (!currentUser) window.location.href = "index.html";

let tasks = JSON.parse(localStorage.getItem(currentUser)) || [];

function saveTasks() {
    localStorage.setItem(currentUser, JSON.stringify(tasks));
}

function displayTasks(filter = "all") {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    tasks
        .filter(task => {
            if (filter === "completed") return task.completed;
            if (filter === "pending") return !task.completed;
            return true;
        })
        .forEach((task, index) => {
            const overdue = task.dueDate && new Date(task.dueDate) < new Date();
            taskList.innerHTML += `
                <div class="task ${overdue ? 'overdue' : ''}">
                    <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleComplete(${index})">
                    <span>${task.name} (${task.dueDate || "No Due Date"})</span>
                    <button onclick="deleteTask(${index})">Delete</button>
                </div>
            `;
        });
}

function addTask(event) {
    event.preventDefault();
    const name = document.getElementById("task-name").value;
    const dueDate = document.getElementById("due-date").value;
    tasks.push({ name, dueDate, completed: false });
    saveTasks();
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    displayTasks();
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    displayTasks();
}

function filterTasks(filter) {
    displayTasks(filter);
}

function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}

displayTasks();
