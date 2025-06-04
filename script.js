function addTask() {
  const input = document.getElementById('task-input');
  const taskText = input.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-center';

  li.innerHTML = `
    <span onclick="toggleComplete(this)" style="cursor:pointer">${taskText}</span>
    <button class="btn btn-sm btn-danger" onclick="removeTask(this)">Delete</button>
  `;

  document.getElementById('task-list').appendChild(li);
  input.value = '';
}

function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}

function toggleComplete(span) {
  span.classList.toggle('completed');
}
