// Get DOM elements
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Event: Add task on button click
addBtn.addEventListener("click", () => {

  const taskText = taskInput.value.trim();

  // Ignore empty input
  if (taskText === "") return;

  // Create new task item
  const li = document.createElement("li");

  // Create checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Create task text span
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  // Add checkbox + text into li
  li.appendChild(checkbox);
  li.appendChild(taskSpan);

  // Checkbox toggles completed state
  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed");
  });

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn";

  // Delete task
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    taskList.removeChild(li);
  });

  // Add delete button to li
  li.appendChild(deleteBtn);

  // Add li to task list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";

});
