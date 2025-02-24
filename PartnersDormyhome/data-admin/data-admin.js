document.addEventListener("DOMContentLoaded", () => {
    const idCardInputs = document.querySelectorAll("#input-group-IDCard input");
    const bankAccountInputs = document.querySelectorAll("#input-group input");

    function setupInputEvents(inputs) {
        inputs.forEach((input, index) => {
            input.addEventListener("input", (event) => {
                event.target.value = event.target.value.replace(/\D/g, "");

                if (event.target.value && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            });

            input.addEventListener("keydown", (event) => {
                if (event.key === "Backspace" && !input.value && index > 0) {
                    inputs[index - 1].focus();
                }
            });
        });
    }
    setupInputEvents(idCardInputs);
    setupInputEvents(bankAccountInputs);
});


function validateEmail() {
    let emailInput = document.getElementById("email");
    let errorMessage = document.getElementById("email-error");
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(emailInput.value) || emailInput.value === "") {
        emailInput.style.border = "1px solid #ccc";
        errorMessage.innerText = "";
    } else {
        emailInput.style.border = "2px solid red";
        errorMessage.innerText = "กรุณากรอกอีเมลถูกต้อง";
    }
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


const mainBtn = document.getElementById("main-btn");
const bankList = document.getElementById("bank-list");
const bankOptions = document.querySelectorAll(".bank-option");


mainBtn.addEventListener("click", () => {
    bankList.style.display = bankList.style.display === "flex" ? "none" : "flex";
});
bankOptions.forEach(button => {
    button.addEventListener("click", () => {
        const selectedImage = button.getAttribute("data-image");
        const bankName = button.textContent.trim();
        mainBtn.innerHTML = `<img src="${selectedImage}" alt="Selected Bank" style="margin-right: 10px;" /> <div class="bnk">${bankName}</div>`;
        bankList.style.display = "none";
    });
});

function checkSelection() {
    let nameInput = document.getElementById('nameInput').value.trim();
    let idCardInputs = document.querySelectorAll('input[name="IDCard"]');
    let idCardFilled = Array.from(idCardInputs).every(input => input.value.trim() !== "");
    let emailInput = document.getElementById('email').value.trim();
    let passwordInput = document.getElementById('password').value.trim();
    let confirmPasswordInput = document.getElementById('confirm-password').value.trim();
    let bankAccountInputs = document.querySelectorAll('input[name="bank-account"]');
    let bankAccountFilled = Array.from(bankAccountInputs).every(input => input.value.trim() !== "");

    let nextBtn = document.getElementById("nextBtn");


    if (nameInput !== "" && idCardFilled && emailInput !== "" && passwordInput !== "" && confirmPasswordInput !== "" && passwordInput === confirmPasswordInput && bankAccountFilled) {
        nextBtn.classList.add("active");
        nextBtn.removeAttribute("disabled");
    } else {
        localStorage.setItem("registeredemail", emailInput);
        nextBtn.classList.remove("active");
        nextBtn.setAttribute("disabled", true);
    }
}
document.querySelectorAll('input').forEach(input => {
    input.addEventListener("input", checkSelection);
});



