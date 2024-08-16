const btn = document.getElementById("btn");
btn.onclick  = () =>{
    if(checkForm())
        window.alert("Form submitted successfully.")
    else{
        
        window.alert("Fill the form correctly.")
    }
}

function checkForm(){
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const pass = document.getElementById('pass');

    if(validateName(name.value) && validateEmail(email,value)
    && validatePassword(password.value))
        return true;
    else
        return false;
}

function validateName(name) {
    // Regular expression to check if the name contains only letters and spaces
    const regex = /^[a-zA-Z\s]+$/;

    // Test the name against the regex
    return regex.test(name);
}

function validateEmail(email) {
    // Regular expression to check if the email ends with "@codingninjas.com"
    const regex = /^[a-zA-Z0-9._%+-]+@codingninjas\.com$/;

    // Test the email against the regex
    return regex.test(email);
}

function validatePassword(password) {
    // Check if the password length is at least 8 and contains the "@" symbol
    return password.length >= 8 && password.includes("@");
}