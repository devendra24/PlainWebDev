function calculateBMI() {
    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;
    result = document.getElementById("result");

    if (weight === "" || height === "") {
        result.textContent = "";
    }
    else {
        let bmi = weight / ((height * height) / 10000);
        bmi = bmi.toFixed(2);
        result.textContent = bmi;
    }
}