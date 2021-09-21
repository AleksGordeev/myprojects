function addErrorInput(elementId) {
    var elementA = document.getElementById(elementId);
    elementA.className = 'error-input';
};

function addErrorClassToAllInputs() {
    addErrorInput('first-name');
    addErrorInput('last-name');
    addErrorInput('city-name');

};

//window.setTimeout(addErrorClassToAllInputs, 1000);
//addErrorClassToAllInputs();

function indeedClass() {
    addErrorInput('first-name');
}
var sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', indeedClass);

function onFirstNameKeyUp() {
    addErrorInput('first-name');
}

var firsNameEl = document.getElementById('first-name');

firsNameEl.addEventListener('keydown', onFirstNameKeyUp)