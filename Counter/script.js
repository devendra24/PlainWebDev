let result = document.getElementById("count");
let increes = parseInt(result.textContent)
function increase(){
    result.textContent = ++increes;
}
function decrease(){
    result.textContent = --increes;
}
function reset(){
    result.textContent = 0;
}