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
function login() {
    let email = document.getElementById("email").value;
    let emailError = document.getElementById("email-error").innerText.trim();

    if (email === "") {
        alert("กรุณากรอกอีเมล");
    } else if (emailError !== ""){
        alert("กรุณากรอกอีเมลให้ถูกต้อง");
    }else {
        localStorage.setItem("registeredforgotemail", email);
        window.location.href = "../otpforgot/otpforgot.html";
    }
}