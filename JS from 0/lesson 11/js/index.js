var label = document.getElementsByClassName('global-div');
label[0].innerHTML = label[0].innerHTML + '*';

var radiobtn = document.getElementById("sexChoiceMale");
radiobtn.checked = true;

var checkBoxBtn = document.getElementById("singleCheck");
checkBoxBtn.checked = true;

var firstNameUserValue = document.getElementById("first-name-user");
firstNameUserValue.value = 'Biba';

var lastNameUserValue = document.getElementById("last-name-user");
lastNameUserValue.value = 'Boba';

var citySelectorValue = document.getElementById("city-Selector");
citySelectorValue.value = 'красноярск'


var changePhotoBtn = document.getElementById("change-photo-btn");
changePhotoBtn.addEventListener("click", function() {
    document.getElementById("user-photo").src = "https://image.shutterstock.com/image-vector/user-avatar-icon-button-profile-260nw-1517550290.jpg";

});