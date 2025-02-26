document.addEventListener("DOMContentLoaded", () => {
    const doomInput = document.getElementById("doom");
    const charCount = document.getElementById("char-count");
    const doomError = document.getElementById("doom-error");

    doomInput.addEventListener("input", () => {
        const inputLength = doomInput.value.length;
        charCount.textContent = `${inputLength}/20`;

        if (inputLength > 20) {
            doomError.textContent = "ชื่อหอพักต้องไม่เกิน 20 ตัวอักษร";
            doomError.style.color = "red";
            doomInput.style.border = "2px solid red";
        } else {
            doomError.textContent = "";
            doomInput.style.border = "1px solid #ccc";
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const toggleIcon = document.getElementById("toggle-hour");
    const timeInputs = document.querySelectorAll("#time input");

    function toggleInputs(disabled) {
        timeInputs.forEach(input => {
            input.disabled = disabled;
            input.value = disabled ? "0" : "";
        });
    }

    function toggleCheckIn() {
        const isToggled = toggleIcon.classList.contains("bxs-toggle-right");

        if (isToggled) {
            toggleIcon.classList.replace("bxs-toggle-right", "bxs-toggle-left");
            toggleInputs(false);
        } else {
            toggleIcon.classList.replace("bxs-toggle-left", "bxs-toggle-right");
            toggleInputs(true);
        }
    }

    toggleIcon.addEventListener("click", toggleCheckIn);

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

    setupInputEvents(timeInputs);
});
document.getElementById("doom").addEventListener("input", checkSelection);

    document.getElementById("nextBtn").addEventListener("click", () => {
        let doomInput = document.getElementById("doom").value.trim();

        localStorage.setItem("doom", doomInput);

});
function validatePhone() {
    let phoneInput = document.getElementById("phone");
    let errorMessage = document.getElementById("phone-error");
    let phonePattern = /^0[0-9]{9}$/;
    if (phonePattern.test(phoneInput.value) || phoneInput.value === "") {
        phoneInput.style.border = "1px solid #ccc";
        errorMessage.innerText = "";
    } else {
        phoneInput.style.border = "2px solid red";
        errorMessage.innerText = "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง";
    }
}

function checkSelection() {
    let doomInput = document.getElementById("doom").value.trim();
    let phoneInput = document.getElementById("phone").value.trim();
    let nearbyPlaceInput = document.getElementById("nearbyPlace").value.trim();
    let notificationInput = document.getElementById("notification").value.trim();
    let bookingInput = document.getElementById("booking").value.trim();
    let contractInput = document.getElementById("contract").value.trim();
    let nextBtn = document.getElementById("nextBtn");

    if (phoneInput !== "" && nearbyPlaceInput !== "" && notificationInput !== "" && bookingInput !== "" && contractInput !== "" && doomInput !== "") {
        nextBtn.classList.add("active");
        nextBtn.removeAttribute("disabled");
    } else {
        nextBtn.classList.remove("active");
        nextBtn.setAttribute("disabled", true);
    }
}

document.querySelectorAll('input').forEach(input => {
    input.addEventListener("input", checkSelection);
});
document.getElementById("nextBtn").addEventListener("click", () => {
    let doom = document.getElementById("doom").value.trim();
    let roomCount = document.getElementById("room").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let nearbyPlace = document.getElementById("nearbyPlace").value.trim();
    let notification = document.getElementById("notification").value.trim();
    let booking = document.getElementById("booking").value.trim();
    let contract = document.getElementById("contract").value.trim();

    let timeInputs = document.querySelectorAll("#time input");
    let checkInTime = Array.from(timeInputs).map(input => input.value).join('');

    let dormData = {
        doom, roomCount, phone, nearbyPlace, notification, booking, contract, checkInTime
    };

    localStorage.setItem("dormData", JSON.stringify(dormData));

    window.location.href = "personalinformation.html";
});
