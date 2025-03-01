function validateName() {
    let nameInput = document.getElementById("name");
    let errorMessage = document.getElementById("name-error");
    let namePattern = /^(?! )[a-zA-Z0-9ก-ฮ๑-๙ ]{4,}(?<! )$/;
    if (namePattern.test(nameInput.value) || nameInput.value === "") {
        nameInput.style.border = "1px solid #ccc";
        errorMessage.innerText = "";
    } else {
        nameInput.style.border = "2px solid red";
        errorMessage.innerText = "ชื่อผู้ใช้ต้องมีอย่างน้อย 4 ตัวอักษร และห้ามใช้อักขระพิเศษ";
    }
}

function validateSurename() {
    let surenameInput = document.getElementById("Surename");
    let errorMessage = document.getElementById("surename-error");
    let surenamePattern = /^(?! )[a-zA-Z0-9ก-ฮ๑-๙ ]{4,}(?<! )$/;
    if (surenamePattern.test(surenameInput.value) || surenameInput.value === "") {
        surenameInput.style.border = "1px solid #ccc";
        errorMessage.innerText = "";
    } else {
        surenameInput.style.border = "2px solid red";
        errorMessage.innerText = "ชื่อผู้ใช้ต้องมีอย่างน้อย 4 ตัวอักษร และห้ามใช้อักขระพิเศษ";
    }
}

function validateEmail() {
    let emailInput = document.getElementById("Email");
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

function validatePhoneNumber() {
    let phoneInput = document.getElementById("Phonenumber");
    let phoneError = document.getElementById("phone-error");
    let phonePattern = /^0[0-9]{9}$/;
    if (phonePattern.test(phoneInput.value) || phoneInput.value === "") {
        phoneInput.style.border = "1px solid #ccc";
        phoneError.innerText = "";
    } else {
        phoneInput.style.border = "2px solid red";
        phoneError.innerText = "กรุณากรอกหมายเลขโทรศัพท์ให้ถูกต้อง";
    }
}

function validatePassword() {
    let password = document.getElementById("Password");
    let passwordError = document.getElementById("password-error");

    if (password.value === "") {
        passwordError.innerText = "";
        password.style.border = "1px solid #ccc";
    } else if (password.value.length < 8) {
        passwordError.innerText = "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร";
        password.style.border = "2px solid red";
    } else {
        passwordError.innerText = "";
        password.style.border = "1px solid #ccc";
    }
}

function validateConfirmPassword() {
    let confirmPassword = document.getElementById("Confirmpassword");
    let password = document.getElementById("Password");
    let confirmPasswordError = document.getElementById("confirm-password-error");

    if (confirmPassword.value === "") {
        confirmPasswordError.innerText = "";
        confirmPassword.style.border = "1px solid #ccc";
    } else if (confirmPassword.value !== password.value) {
        confirmPasswordError.innerText = "รหัสผ่านไม่ตรงกัน";
        confirmPassword.style.border = "2px solid red";
    } else {
        confirmPasswordError.innerText = "";
        confirmPassword.style.border = "1px solid #ccc";
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
    togglePasswordVisibility("Password", "toggle-password");
});
document.getElementById("toggle-confirm-password").addEventListener("click", function () {
    togglePasswordVisibility("Confirmpassword", "toggle-confirm-password");
});

function register() {
    let name = document.getElementById("name").value;
    let surename = document.getElementById("Surename").value;
    let email = document.getElementById("Email").value;
    let phone = document.getElementById("Phonenumber").value;
    let password = document.getElementById("Password").value;
    let confirmPassword = document.getElementById("Confirmpassword").value;
    let nametError = document.getElementById("name-error").innerText.trim();
    let surenameError = document.getElementById("surename-error").innerText.trim();
    let emailError = document.getElementById("email-error").innerText.trim();
    let phoneError = document.getElementById("phone-error").innerText.trim();
    let passwordError = document.getElementById("password-error").innerText.trim();
    let confirmPasswordError = document.getElementById("confirm-password-error").innerText.trim();
    
    if (name === "" || surename === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");

    } else if (nametError !== "" || surenameError !== "" || emailError !== "" || phoneError !== "" || passwordError !== "" || confirmPasswordError !== "") {
        alert("กรุณากรอกข้อมูลให้ถูกต้อง");

    }else if (email && password) {
        alert("สมัครสมาชิกสำเร็จ! กรุณาเข้าสู่ระบบ");
        window.location.href = "#";
    }
}
