const categoryNameInput = document.getElementById("category-input");
const categoryColorInput = document.getElementById("cateogry-color-picker");

const categoryList = document.getElementById("list-container");
const categoriesSelect = document.getElementById("category-select");

const newNoteTitleInput = document.getElementById("new-note-title");
const newNoteContentInput = document.getElementById("new-note-content");
const newNoteCategoryInput = document.getElementById("category-select");

const noteList = document.getElementById("sticky-wall-list");

const deleteNote = document.createElement("button");

const categories = [];

function createOption(name, color) {
  let categoryOption = document.createElement("option");
  categoryOption.value = color;
  categoryOption.innerHTML = name;
  categoryOption.setAttribute("data-category-color", color);
  categoriesSelect.appendChild(categoryOption);
}

function addCategory() {
  if (categoryNameInput.value === "") {
    alert("You must give a name to the category!");
    return;
  } else if (categoryColorInput.value === "#000000") {
    alert("Please pick a color for the category!");
    return;
  }
  let li = document.createElement("li");
  li.style.borderColor = categoryColorInput.value;
  li.innerHTML = categoryNameInput.value;
  categories.push({
    name: categoryNameInput.value,
    color: categoryColorInput.value,
  });
  createOption(categoryNameInput.value, categoryColorInput.value);
  categoryList.appendChild(li);

  categoryNameInput.value = "";
  categoryColorInput.value = "#000000";
}

function addTask() {
  if (newNoteTitleInput.value === "") {
    alert("Please fill in the note title");
    return;
  } else if (newNoteContentInput.value === "") {
    alert("Please fill in the note content");
    return;
  } else if (!newNoteCategoryInput.value) {
    alert("Please select a category for note!");
    return;
  }
  const li = document.createElement("li");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");

  li.classList.add("sticky-wall-list-item");
  li.style.backgroundColor = newNoteCategoryInput.value;

  h4.innerHTML = newNoteTitleInput.value;
  h4.classList.add("note-title");

  p.innerHTML = newNoteContentInput.value;
  p.classList.add("note-content");

  li.appendChild(h4);
  li.appendChild(p);

  noteList.insertBefore(li, noteList.firstChild);

  console.log("new note category select", newNoteCategoryInput.value);
}
