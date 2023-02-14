var userEmailInput = document.getElementById("userEmailInput");
var userPasswordInput = document.getElementById("userPasswordInput");
var logInBtn = document.getElementById("logInBtn");
var wrongAlert = document.getElementById("wrongAlert");
var noDataAlert = document.getElementById("noDataAlert");

logInBtn.addEventListener("click", function (e) {
    var user = {
        email: userEmailInput.value,
        password: userPasswordInput.value
    }

    loginInfo = false;
    var dataBase = JSON.parse(localStorage.getItem("users"));
    if (localStorage.getItem("users") != null) {
        for (var i = 0; i < dataBase.length; i++) {
            if (user.email == dataBase[i].email && user.password == dataBase[i].password) {
                loginInfo = true;
                user = {
                    name: dataBase[i].name,
                    email: userEmailInput.value,
                    password: userPasswordInput.value
                }
                break;
            }
        }

        if(loginInfo == false) {
            e.preventDefault();
            if (userEmailInput.value == "" | userPasswordInput.value == "") {
                noDataAlert.classList.remove("d-none");
                noDataAlert.classList.add("d-block");
            } else {
                wrongAlert.classList.remove("d-none");
                wrongAlert.classList.add("d-block");
            }
        }
    } else {
        e.preventDefault()
        if (userEmailInput.value == "" | userPasswordInput.value == "") {
            noDataAlert.classList.remove("d-none");
            noDataAlert.classList.add("d-block");
        } else {
            wrongAlert.classList.remove("d-none");
            wrongAlert.classList.add("d-block");
        }
    }

    if (loginInfo == true) {
        window.location = "home.html"
        sessionStorage.setItem("current", JSON.stringify(user));
    } else {
        if (userEmailInput.value == "" | userPasswordInput.value == "") {
            noDataAlert.classList.remove("d-none");
            noDataAlert.classList.add("d-block");
        } else {
            wrongAlert.classList.remove("d-none");
            wrongAlert.classList.add("d-block");
        }
    }
});

function removeAlert() {
    noDataAlert.classList.add("d-none");
    noDataAlert.classList.remove("d-block");
    wrongAlert.classList.add("d-none");
    wrongAlert.classList.remove("d-block");
}

userEmailInput.addEventListener("focus", removeAlert);
userPasswordInput.addEventListener("focus", removeAlert);