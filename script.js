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
  li.textContent = taskText;

  // Toggle completed on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button for task
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent toggle when deleting
    taskList.removeChild(li);
  });

  // Append delete button to task
  li.appendChild(deleteBtn);

  // Add to list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
});
