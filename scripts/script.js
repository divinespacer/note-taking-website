const theme = document.querySelector("#theme");
const navB = document.querySelector("nav");
const txtArea = document.querySelector("textarea");
const saveCancel = document.querySelector("#savecancel");
const mainGrid = document.querySelector(".maingrid");
const noteList = document.querySelector("nav ul");

function themeToggle(event) {
  console.log(event);
  document.body.classList.toggle("darkMode");
  navB.classList.toggle("navDarkMode");
  theme.textContent === "Dark Theme"
    ? (theme.textContent = "Light Theme")
    : (theme.textContent = "Dark Theme");
}
theme.addEventListener("click", themeToggle);

function cancel(event) {
  if (event.target.textContent === "Cancel") {
    txtArea.classList.add("hide");
    saveCancel.classList.add("hide");
  }
}
saveCancel.addEventListener("click", cancel);

function newNote(event) {
  console.log(event);
  if (event.target.textContent === "New Note") {
    txtArea.classList.remove("hide");
    saveCancel.classList.remove("hide");
    txtArea.value = "";
  }
}
mainGrid.addEventListener("click", newNote);

let notesArray = [
  { title: "note one", body: "this is my first note" },
  { title: "note two", body: "this is my second note" },
];

function saveNote(event) {
  console.log(event);
  if (event.target.textContent === "Save") {
    let noteText = txtArea.value;
    let noteTitle = prompt("What is the title of this note?");
    let fullNote = { title: noteTitle, body: noteText };
    notesArray.push(fullNote);

    let note = document.createElement("li");
    noteList.appendChild(note);
    note.textContent = noteTitle;
    console.log(note);
    console.log(notesArray);
  }
}

saveCancel.addEventListener("click", saveNote);
