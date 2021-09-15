setTimeout(function() {
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
}, 2000);