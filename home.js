document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.className = 'task-item'; // Add a class for styling
            listItem.innerHTML = `
                <div class="checkbox-container">
                    <input type="checkbox" class="checkbox">
                    <span>${taskText}</span>
                </div>
                <button class="remove-btn">Remove</button>
            `;
            
            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    });

    // Event delegation for remove button
    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-btn')) {
            event.target.closest('.task-item').remove();
        }
    });
});