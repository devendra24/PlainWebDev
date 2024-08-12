let selectedNoteIndex;
displayNotes()
function saveNote() {
    const title = document.getElementById('noteTitle').value;
    const content = document.getElementById('noteContent').value;
    if (title.trim() === '' || content.trim() === '') return alert('Both title and content are required!');

    let notes = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];
    if (selectedNoteIndex !== undefined) {
        notes[selectedNoteIndex] = { title, content };
        selectedNoteIndex = undefined;
    } else {
        notes.push({ title, content });
    }
    localStorage.setItem('notes', JSON.stringify(notes));
    document.getElementById('noteTitle').value = '';
    document.getElementById('noteContent').value = '';
    displayNotes();
}

function displayNotes() {
    let notes = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];
    displayFilteredNotes(notes);
}

function deleteNote() {
    var existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    notes = document.querySelectorAll((".note"));
    notes.forEach((note,index)=>{
        if(note.querySelector(".note-checkbox").checked){
            existingNotes.splice(index,1);
        }
    })
    localStorage.setItem("notes", JSON.stringify(existingNotes));
    displayNotes();
}

function clearAllNotes(){
    localStorage.removeItem("notes");
    displayNotes();
}

function searchNotes(){
    let search = document.getElementById("search");
    let notes = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];
    notes = notes.filter(note=>note.title.toLowerCase().includes(search.value));
    displayFilteredNotes(notes);
}

function displayFilteredNotes(notes) {
    let notesList = document.getElementById('notesList');
    notesList.innerHTML = '';
    notes.forEach((note, index) => {
        let template = document.getElementById('noteTemplate').content.cloneNode(true);
        let noteDiv = template.querySelector('.note');
 

        template.querySelector('.note-title').textContent = note.title;
        template.querySelector('.note-content').textContent = note.content;

        notesList.appendChild(template);
    });
}