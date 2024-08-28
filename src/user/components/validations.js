export function loginValidateSave() {
    var isValid = true;
    var characters = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = document.getElementById("txtEmail").value;
    var splitemail = email.split(/\r|\r\n|\n/);
    var emailcount = splitemail.length;
    if (document.getElementById("txtEmail").value === "") {
        alert("Email Id Required.");
        document.getElementById("txtEmail").focus()
        isValid = false;
    }
    else if (characters.test(splitemail[emailcount - 1]) === false && document.getElementById("txtEmail").value !== "") {
        alert("Invalid Email Id.");
        document.getElementById("txtEmail").focus()
        isValid = false;
    }
    else if (document.getElementById("txtPassword").value === "") {
        alert("Password Required.");
        document.getElementById("txtPassword").focus();
        isValid = false;
    }
    return isValid;
}