function addErrorInput(elementId) {
    var elementA = document.getElementById(elementId);
    elementA.className = 'error-input';
};

function addErrorClassToAllInputs() {
    addErrorInput('first-name');
    addErrorInput('last-name');
    addErrorInput('city-name');

};

addErrorClassToAllInputs();