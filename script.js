const password = document.querySelector("#password");
const conf_password = document.querySelector("#conf-password");

conf_password.addEventListener("keyup", matchPasswords);
password.addEventListener("keyup", checkPasswords);

// function isPattern(password) {
//     let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
//     return pattern.test(password);
// }

function checkPasswords () {
    const pw = password.value;

    if (pw.length >= 2 && pw.length < 8)
        password.classList.add("length_error");
    else 
        password.classList.remove("length_error");
}

function matchPasswords() {
    const pw = password.value;
    const conf_pw = conf_password.value;

    if (pw.length < 8 || conf_pw.length < 8) return;
    // console.log(pw);
    // console.log(conf_pw);
    
    if (pw !== conf_pw) {
        password.classList.add("error");
        conf_password.classList.add("error");
        return;
    }
    if (pw === conf_pw) {
        password.classList.remove("error");
        conf_password.classList.remove("error");
        return;
    }
}


const required_field = document.querySelectorAll("input[required]");

required_field.forEach(input => {
    input.addEventListener("mousedown", () => {
        if (!input.value)
            input.classList.add("req_error");
    });
    input.addEventListener("keyup", () => {
        if (input.value)
            input.classList.remove("req_error");
    });
});