const input = document.getElementById("js-input");
const button = document.getElementById("js-button");
const listArea = document.getElementById("js-list");

const addTask = (task) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = task;

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Done!";
  deleteButton.addEventListener("click", (e) => {
    e.preventDefault();
    deleteTask(deleteButton);
  });

  listItem.appendChild(deleteButton);
  listArea.appendChild(listItem);
};

const deleteTask = (deleteButton) => {
  const pickedTask = deleteButton.closest("li");
  listArea.removeChild(pickedTask);
};

button.addEventListener("click", (e) => {
  const value = input.value;
  // e.preventDefault();
  addTask(value);
  input.value = "";
});
