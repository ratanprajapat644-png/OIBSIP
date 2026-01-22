const taskInput = document.getElementById("taskInput");
const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return alert("Enter a task!");

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${text}</span>
    <div class="actions">
      <i class="fa fa-check" onclick="completeTask(this)"></i>
      <i class="fa fa-trash" onclick="deleteTask(this)"></i>
    </div>
  `;
  pendingList.appendChild(li);
  taskInput.value = "";
}

function completeTask(icon) {
  const li = icon.parentElement.parentElement;
  icon.remove();
  completedList.appendChild(li);
}

function deleteTask(icon) {
  icon.parentElement.parentElement.remove();
}
