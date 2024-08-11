var modal = document.getElementById("myModal"); 
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");


openModalBtn.onclick = () =>{
    modal.style.display = "block";
}

closeModalBtn.onclick = () =>{
    modal.style.display = "none";
}

window.onclick = () =>{
    if(event.target == modal)
        modal.style.display = "none";
}