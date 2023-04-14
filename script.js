const password = document.querySelector("#password");
const conf_password = document.querySelector("#conf-password");
const error_msg = document.querySelector(".error-msg");


conf_password.addEventListener("keyup", checkPasswords);

// function isPattern(password) {
//     let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
//     return pattern.test(password);
// }

function checkPasswords() {
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
