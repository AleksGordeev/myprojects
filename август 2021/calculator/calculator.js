/* алгоритм*/
var number1Input = document.getElementById('number1');
var number2Input = document.getElementById('number2');
var numberPlusButton = document.getElementById('plusBtn');
var numberMinusButton = document.getElementById('minusBtn');
var numberMultiplyButton = document.getElementById('multiplyBtn');
var numberDivideButton = document.getElementById('divideBtn');


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

var onOperationBtnClick = function(event) {
    var pressedOperationButton = event.target;
    var operationValue = pressedOperationButton.Value;
    var numbersValuesObj = getNumbers();
     

     if (operationValue == '+') {
        var resultValue = numbersValuesObj.num1 + numbersValuesObj.num2
    }   else if (operationValue == '+') {
        var resultValue = numbersValuesObj.num1 - numbersValuesObj.num2
        }

    window.alert(resultValue); 
    }

//plus button logic
var onClickPlusButton = function () {
  /*   var numbersValuesObj = getNumbers();

    var resultValue = numbersValuesObj.num1 + numbersValuesObj.num2;
    window.alert(resultValue); */
}
numberPlusButton.addEventListener('click', onOperationBtnClick);

//minus button logic
var onClickMinusButton = function () {
   /*  var numbersValuesObj = getNumbers();

    var resultValue = numbersValuesObj.num1 - numbersValuesObj.num2;
    window.alert(resultValue); */
}
numberMinusButton.addEventListener('click', onOperationBtnClick);

//multiply button logic
var onClickMultiplyButton = function () {
/*     var numbersValuesObj = getNumbers();

    var resultValue = numbersValuesObj.num1 * numbersValuesObj.num2;
    window.alert(resultValue); */
}
numberMultiplyButton.addEventListener('click', onOperationBtnClick);

//divide button logic
var onClickDivideButton = function () {
/*     var numbersValuesObj = getNumbers();

    var resultValue = numbersValuesObj.num1 / numbersValuesObj.num2;
    window.alert(resultValue); */
}
numberDivideButton.addEventListener('click', onOperationBtnClick);


