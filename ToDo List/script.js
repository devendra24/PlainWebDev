let input = document.getElementById('taskInput');
let button = document.getElementById('addTaskBtn');
let list = document.getElementById('tasksList');


button.onclick = () => {
    if(input.value){
        let listE =  document.createElement('li');
        listE.innerHTML = `<span>${input.value}</span> <button onclick="removeTask(this)">Remove</button>`;
        list.appendChild(listE);
    }
}
function removeTask(button){
    list.removeChild(button.parentElement);
}
