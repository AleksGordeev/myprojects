/* алгоритм*/
var number1Input = document.getElementById('number1');
var number2Input = document.getElementById('number2');

var getNumberFromInput = function (inputParam) {
    var valueAsString = inputParam.value;
    var valueAsNumber = new Number(valueAsString);
    return valueAsNumber;
}

var getNumbers = function () {
    var numberValue1 = getNumberFromInput(number1Input);
    var numberValue2 = getNumberFromInput(number2Input);
    var result = {
        num1: numberValue1,
        num2: numberValue2
    }
    return result;
}

var onOperationBtnClick = function (e) {
    var pressedOperationButton = e.target;
    var operationValue = pressedOperationButton.value;
    var numbersValuesObj = getNumbers();

    if (operationValue == '+') {
        var resultValue = numbersValuesObj.num1 + numbersValuesObj.num2
    } else if (operationValue == '-') {
        var resultValue = numbersValuesObj.num1 - numbersValuesObj.num2
    } else if (operationValue == '*') {
        var resultValue = numbersValuesObj.num1 * numbersValuesObj.num2
    } else if (operationValue == '/') {
        var resultValue = numbersValuesObj.num1 / numbersValuesObj.num2
    }


    window.alert(resultValue);
}

//
var addOperationListenerForButtonById = function (id) {
    var btn = document.getElementById(id);
    btn.addEventListener('click', onOperationBtnClick);
}

var operationButtons = document.querySelectorAll('.it-for-js-operation-btn');

for (var i = 0; i < operationButtons.length; i++) {
    addOperationListenerForButtonById(operationButtons[i].id);
}