let inputField = document.getElementById("inputBox");

function getValue(inputNumber){    
    inputField.value += inputNumber;
}

function getResult(){
    let result = eval(inputField.value);
    inputField.value = "";
    inputField.value = result;
}

function clearAll(){
    inputField.value = " "
}