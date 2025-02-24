let registeredforgotemail = localStorage.getItem("registeredforgotemail");
let emailbt = document.getElementById("emailbt");
if (emailbt) {
    emailbt.textContent = registeredforgotemail;
}
function validatePassword() {
    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("password-error");
    if (password === "") {
        passwordError.innerText = "";
        document.getElementById("password").style.border = "1px solid #ccc";
    }else if (password.length < 8) {
        passwordError.innerText = "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร";
        document.getElementById("password").style.border = "2px solid red";
    }else{
        passwordError.innerText = "";
        document.getElementById("password").style.border = "1px solid #ccc";
    }
}
function validateconfirmPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let confirmPasswordError = document.getElementById("confirm-password-error");

    if (confirmPassword === ""){
        confirmPasswordError.innerText = "";
        document.getElementById("confirm-password").style.border = "1px solid #ccc";
    }else if (confirmPassword.length < 8) {
        confirmPasswordError.innerText = "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร";
        document.getElementById("confirm-password").style.border = "2px solid red";
    } else if (password !== confirmPassword) {
        confirmPasswordError.innerText = "รหัสผ่านไม่ตรงกัน";
        document.getElementById("confirm-password").style.border = "2px solid red";
    } else {
        confirmPasswordError.innerText = "";
        document.getElementById("confirm-password").style.border = "1px solid #ccc";
    }
}
function togglePasswordVisibility(inputId, toggleId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = document.getElementById(toggleId);
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.classList.replace("bx-hide", "bx-show");
    } else {
        passwordInput.type = "password";
        toggleIcon.classList.replace("bx-show", "bx-hide");
    }
}
document.getElementById("toggle-password").addEventListener("click", function () {
    togglePasswordVisibility("password", "toggle-password");
});
document.getElementById("toggle-confirm-password").addEventListener("click", function () {
    togglePasswordVisibility("confirm-password", "toggle-confirm-password");
});
function login() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value.trim();
    let passwordError = document.getElementById("password-error").innerText.trim();
    let confirmPasswordError = document.getElementById("confirm-password-error").innerText.trim();

    if (password === "" || confirmPassword === "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else if (passwordError !== "" || confirmPasswordError !== "") {
        alert("กรุณากรอกข้อมูลให้ถูกต้อง");
    }else {
        window.location.href = "../Log-in_Dormyhome/log-in.html";
    }
}