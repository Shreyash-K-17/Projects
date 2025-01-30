function checkDueDates() {
    tasks.forEach(task => {
        if (task.dueDate && new Date(task.dueDate) - new Date() < 86400000 && !task.completed) {
            alert(`Reminder: Task "${task.name}" is due soon!`);
        }
    });
}

setInterval(checkDueDates, 3600000); // Check every hour
