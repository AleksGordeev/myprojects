function changeClassFunction(idToChange, classToChange) {
    let elToChange = document.getElementById(idToChange);
    if (idToChange != null && classToChange != null) {

        elToChange.className = classToChange;
    };
}

changeClassFunction('first-name-user', 'hide');

function invizTime() {
    changeClassFunction('picture-to-change', 'zero-width');
};

function changeClassFunction(idToChange, classToChange) {
    let elToChange = document.getElementById(idToChange);
    if (idToChange != null && classToChange != null) {

        elToChange.className = classToChange;
    };
}



setTimeout(invizTime, 1000);


/*
function deleteFunction(idToDel) {
    let elToDel = document.getElementById(idToDel);
    if (idToDel != null) {

        elToDel.remove();
    };
}

deleteFunction('1first-name-user');


/*
function setError(idName) {

    var nameUser = document.getElementById(idName);
    nameUser.className = 'error';
};

var loginButton = document.getElementById('login');
loginButton.onclick = function() {
    setError('first-name-user');
};

function getSumm(a, b) {
    a = Number(a);
    b = Number(b);
    let summ = a + b;
    return summ;
    console.log(summ);
};

function sayHello() {
    window.alert('My name');
};



function timeoutError() {
    setError('last-name-user');
};

setTimeout(timeoutError, 2000);

function changePicture(inputParam) {
    let pictureToggle = document.getElementById('inviz-pict');
    pictureToggle.className = inputParam;
};

var hideButton = document.getElementById('hide-btn');
hideButton.onclick = function() {
    changePicture('hide');
};

var revealButton = document.getElementById('rev-btn');
revealButton.onclick = function() {
    changePicture('reveal');
};

var i = 0;

function plusIteration() {
    i++;
    let pluserMonitor = document.getElementById('password-user');
    pluserMonitor.value = i;
    console.log(i);

}

/*
var firstNameUSer = document.getElementById('first-name-user');
firstNameUSer.value = 'Vovan';

var lastNameUSer = document.getElementById('last-name-user');
lastNameUSer.value = 'Vovanov';

var adressUSer = document.getElementById('adress');
adressUSer.value = 'Ulica';

function setMyNameToAllInputs() {
    var firstNameUSer = document.getElementById('first-name-user');
    firstNameUSer.value = 'alex';

    var lastNameUSer = document.getElementById('last-name-user');
    lastNameUSer.value = 'alex';

    var adressUSer = document.getElementById('adress');
    adressUSer.value = 'alex';
};

setMyNameToAllInputs();

function setMySurnameToAllInputs() {
    var newValue = 'gordeev';

    var firstNameUSer = document.getElementById('first-name-user');
    firstNameUSer.value = newValue;

    var lastNameUSer = document.getElementById('last-name-user');
    lastNameUSer.value = newValue;

    var adressUSer = document.getElementById('adress');
    adressUSer.value = newValue;
};

setMySurnameToAllInputs();
*/

/*
function changeValue(newValue) {
    var firstNameUser = document.getElementById('first-name-user');
    firstNameUser.value = newValue;

    var lastNameUser = document.getElementById('last-name-user');
    lastNameUser.value = newValue;

    var adressUser = document.getElementById('adress');
    adressUser.value = newValue;
};


changeValue('jopa');
changeValue('mira');
*/

/*function setError() {
    var nameUser = document.getElementById('first-name-user');
    nameUser.className = 'error';

    var surnameUser = document.getElementById('last-name-user');
    surnameUser.className = 'error';

    var adressUser = document.getElementById('adress');
    adressUser.className = 'error';

};
*/

//setInterval(plusIteration, 1000);


//setError();

//let timerId = setTimeout()




/*
function alertValueAndClass(elementId) {
    console.log('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH');
    console.log(elementId.value);
    console.log(elementId.className);
    console.log('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH');
};
*/
/*function getValue(id) {
    var elId = document.getElementById(id);
    console.log('HFFFFFFFFFFFF');
    return elId.value;

}

var adress = 'adress';
var alertValue = getValue(adress);
window.alert(alertValue);
*/



/*
var adressEl = document.getElementById('adress');
alertValueAndClass(adressEl);
*/


/*
var cityEl = document.getElementById('selected-city');
alertValueAndClass(cityEl);
var firstNameUserEl = document.getElementById('first-name-user');
alertValueAndClass(adressEl);
var lastNameUserEl = document.getElementById('last-name-user');
alertValueAndClass(firstNameUserEl);
var mailUserEl = document.getElementById('mail-user');
console.log(mailUserEl.value);
var textArea = document.getElementById('textarea-user');
console.log(textArea.value);
var passwordUserEl = document.getElementById('password-user');
console.log(passwordUserEl.value);
var checkStatusEl = document.getElementById('check-remember');
console.log(checkStatusEl.value);
var imageUserEl = document.getElementById('image-user');

adressEl.value = 'Jopa mira';
console.log(adressEl.value);

firstNameUserEl.value = 'Biba';
// console.log(firstNameUserEl.value);

lastNameUserEl.value = 'Boba';
// console.log(lastNameUserEl.value);

// не забудьте установить для кнопки в html-е значение атрибута id='login'
var loginButton = document.getElementById('login');
loginButton.onclick = function() {
    console.log(checkStatusEl.checked);
    alert('login: ' + firstNameUserEl.value + ' ' + 'password: ' + passwordUserEl.value + ' ' + 'remember me: ' + checkStatusEl.checked);
};
*/