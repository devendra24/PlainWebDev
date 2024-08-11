let arrayInput = document.getElementById('arrayInput');
let result = document.getElementById('result');
let primeList = [];
function filterPrimes(){
    if(arrayInput.value){
        let array = arrayInput.value.split(",");
        array = array.filter(element => {
            return element !== ' ' && isPrime(Number(element));
        });
        result.textContent = array.join(',');
    }
}

function isPrime(num){
    if(num === 1){
        return false;
    }
    
    primeList.forEach(element=>{
        if(element==num){
            return true;
        }
    })

    for(i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return false;
        }
    }
    primeList.push(num);

    return true;
    
}
