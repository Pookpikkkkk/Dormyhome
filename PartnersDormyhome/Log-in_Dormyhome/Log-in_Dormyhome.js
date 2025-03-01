function validateEmail() {
    let emailInput = document.getElementById("email");
    let errorMessage = document.getElementById("email-error");
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(emailInput.value) || emailInput.value === "") {
        emailInput.style.border = "1px solid #ccc";
        errorMessage.innerText = "";
    } else {
        emailInput.style.border = "2px solid red";
        errorMessage.innerText = "กรุณากรอกอีเมลให้ถูกต้อง";
    }
}

function validatePassword() {
    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("password-error");

    if (password === "") {
        passwordError.innerText = "";
        document.getElementById("password").style.border = "1px solid #ccc";
    } else if (password.length < 8) {
        passwordError.innerText = "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร";
        document.getElementById("password").style.border = "2px solid red";
    } else {
        passwordError.innerText = "";
        document.getElementById("password").style.border = "1px solid #ccc";
    }
}

document.getElementById("toggle-password")?.addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.getElementById("toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.classList.replace("bx-hide", "bx-show");
    } else {
        passwordInput.type = "password";
        toggleIcon.classList.replace("bx-show", "bx-hide");
    }
});

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let emailError = document.getElementById("email-error").innerText;
    let passwordError = document.getElementById("password-error").innerText;

    if (email === "" || password === "") {
        alert("กรุณากรอกอีเมลและรหัสผ่าน");
        document.getElementById("password").value = "";
        return;
    } else if (emailError || passwordError) {
        alert("กรุณากรอกข้อมูลให้ถูกต้อง");
        document.getElementById("password").value = "";
        return;
    } else{
        alert("เข้าสู่ระบบสำเร็จ!");
        window.location.href = "#";
    }
}