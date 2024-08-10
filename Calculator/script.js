let result = document.getElementById("result");
let resultVal = [];

const valueType = Object.freeze({
    digit: 0,
    dot: 1,
    expression: 2
});

function clearDisplay(){
    result.value="";
    resultVal=[];
}

function appendToDisplay(value){
    let valT = getValueType(value);
    if(resultVal.length == 0){
        if(valT==valueType.digit){
            resultVal.push(value);
        }
        if(value == '-'){
            resultVal.push(value);
        }
    }
    else{
        appendValArray(valT,value);
    }
    result.value=resultVal.join("");
}

function appendValArray(valT,value){
    let val = resultVal[resultVal.length-1];
    let valT2 = getValueType(val[val.length -1]);

    switch(valT){
        case valueType.dot:
            if(resultVal.length >2){
                let val2 = resultVal[resultVal.length-2];
                let valT3 = getValueType(val2[val2.length -1]);
                if(valT3 != valueType.dot)
                    resultVal.push(value);
            }
            else if(valT2 == valueType.expression){
                resultVal.pop();
                resultVal.push(value);
            }
            else if(valT2 != valueType.dot){
                resultVal.push(value);
            }
            break;
        case valueType.expression:
            if(valT2 != valueType.digit)
                resultVal.pop();
            resultVal.push(value);
            break;
        default:
            if(valT2 == valueType.digit){
                resultVal[resultVal.length-1]+=value;
            }
            else{
                resultVal.push(value);
            }
    }
    console.log(resultVal);
}

function calculate(){
    let value = result.value;
}
function getValueType(expression){
    switch(expression){
        case '+':
        case '-':
        case '/':
        case 'x':
            return valueType.expression;
        case '.':
            return valueType.dot;
        default:
            return valueType.digit;
    }
}