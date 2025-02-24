let registeredforgotemail = localStorage.getItem("registeredforgotemail");
let emailbt = document.getElementById("emailbt");
if (emailbt) {
    emailbt.textContent = registeredforgotemail;
}

let generatedOtp;

const inputs = document.querySelectorAll(".input-group input");
inputs.forEach((input, index) => {
    input.addEventListener("input", (event) => {
        event.target.value = event.target.value.replace(/\D/g, "");
        const value = event.target.value;
        if (value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
        checkSelection();
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            inputs[index - 1].focus();
        }
    });
});

function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function sendOtp() {
    generatedOtp = generateOtp();
    alert("รหัส OTP ของคุณคือ " + generatedOtp);

    let otpButton = document.getElementById("otp-button");
    if (!otpButton) return;

    otpButton.disabled = true;
    let seconds = 60;
    otpButton.innerText = `รับ OTP อีกครั้ง (${seconds}s)`;

    let countdown = setInterval(() => {
        seconds--;
        otpButton.innerText = `รับ OTP อีกครั้ง (${seconds}s)`;

        if (seconds === 0) {
            clearInterval(countdown);
            otpButton.innerText = "รับ OTP";
            otpButton.disabled = false;
        }
    }, 1000);
}

function checkSelection() {
    let otpValue = Array.from(document.querySelectorAll(".input-group input"))
        .map((input) => input.value.trim())
        .join("");

    let otpErrorMessage = document.getElementById("otp-error");
    let nextBtn = document.getElementById("nextBtn");

    if (otpValue.length < 6) {
        otpErrorMessage.innerText = "กรุณากรอก OTP ให้ครบถ้วน";
        otpErrorMessage.style.color = "red";
        nextBtn?.setAttribute("disabled", true);
        return;
    } 

    if (otpValue === generatedOtp) {
        otpErrorMessage.innerText = "";
        nextBtn?.classList.add("active");
        nextBtn?.removeAttribute("disabled");

    } else {
        otpErrorMessage.innerText = "รหัส OTP ไม่ถูกต้อง";
        otpErrorMessage.style.color = "red";
        nextBtn?.setAttribute("disabled", true);
    }
}
document.querySelectorAll(".input-group input").forEach((input) => {
    input.addEventListener("input", checkSelection);
});
