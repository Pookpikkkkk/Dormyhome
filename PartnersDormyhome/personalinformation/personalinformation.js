function loadImagesOnOtherPage() {
    for (let i = 1; i <= 1; i++) {
        const previewId = `preview${i}`;
        const savedImage = localStorage.getItem(previewId);
        if (savedImage) {
            const imageContainer = document.getElementById(previewId);
            if (imageContainer) {
                imageContainer.innerHTML = `<img src="${savedImage}">`;
            }
        }
    }
}
function validatePhone() {
    let phoneInput = document.getElementById("phone");
    let phonePattern = /^0[0-9]{9}$/;
    if (phonePattern.test(phoneInput.value) || phoneInput.value === "") {
        phoneInput.style.border = "1px solid #ccc";
        errorMessage.innerText = "";
    } else {
        phoneInput.style.border = "2px solid red";
        errorMessage.innerText = "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง";
    }
}

function toggleEdit(id) {
    let inputField = document.getElementById(id);
    let editButton = inputField.nextElementSibling;

    if (inputField.readOnly) {
        inputField.readOnly = false;
        inputField.style.border = "1px solid black";
        editButton.textContent = "บันทึก";
    } else {
        inputField.readOnly = true;
        inputField.style.border = "none";
        editButton.textContent = "แก้ไข";
        saveToLocalStorage(id, inputField.value.trim());
    }
}

function saveToLocalStorage(id, value) {
    let dormData = JSON.parse(localStorage.getItem("dormData")) || {};
    dormData[id] = value;
    localStorage.setItem("dormData", JSON.stringify(dormData));
    console.log("บันทึกค่า:", dormData);
}

function validatePhone() {
    const phoneInput = document.getElementById("phone");
    phoneInput.value = phoneInput.value.replace(/\D/g, "");
}

document.addEventListener("DOMContentLoaded", () => {
    loadImagesOnOtherPage();

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

    let dormData = JSON.parse(localStorage.getItem("dormData")) || {};
    if (dormData) {
        document.getElementById("doom").value = dormData.dormName || "";
        document.getElementById("phone").value = dormData.phone || "";
        document.getElementById("notification").value = dormData.notification || "";
        document.getElementById("booking").value = dormData.booking || "";
        document.getElementById("contract").value = dormData.contract || "";

        let checkInArray = (dormData.checkInTime || "").split('');
        timeInputs.forEach((input, index) => {
            input.value = checkInArray[index] || "";
        });
    }

    document.querySelectorAll('input').forEach(input => {
        input.addEventListener("blur", () => {
            saveToLocalStorage(input.id, input.value.trim());
        });
    });
});