button = document.getElementById('btn');
input = document.getElementById('birthday');
result = document.getElementById('result');
button.onclick = () =>{
    if(input.value){
        result.textContent = new Date(new Date() - new Date(input.value)).getFullYear() - 1970;
    }
    else{
        window.alert("Please enter your birthdate");
    }
}