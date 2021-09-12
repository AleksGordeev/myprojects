var adressEl = document.getElementById("adress");
var cityEl = document.getElementById("selected-city");
var firstNameUserEl = document.getElementById("first-name-user");
var lastNameUserEl = document.getElementById("last-name-user");
var mailUserEl = document.getElementById("mail-user");
var textArea = document.getElementById("textarea-user");
var passwordUserEl = document.getElementById("password-user");
var checkStatusEl = document.getElementById("check-remember");
var imageUserEl = document.getElementById("image-user");

var loginButton = document.getElementById("login");
loginButton.onclick = function () {
  console.log(checkStatusEl.checked);
  alert(
    "login: " +
      firstNameUserEl.value +
      " " +
      "password: " +
      passwordUserEl.value +
      " " +
      "remember me: " +
      checkStatusEl.checked
  );
};

function alertValues() {
  console.log(firstNameUserEl.value);
  console.log(lastNameUserEl.value);
  console.log(adressEl.value);
}

alertValues();
