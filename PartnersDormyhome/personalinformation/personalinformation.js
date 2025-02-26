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

    let dormData = JSON.parse(localStorage.getItem("dormData")) || {};
    if (dormData.doom) {
        doomInput.value = dormData.doom;
        charCount.textContent = `${dormData.doom.length}/20`;
    }
});
document.addEventListener("DOMContentLoaded", () => {
    let dormData = JSON.parse(localStorage.getItem("dormData"));
    
    console.log("Dorm Data:", dormData);

    if (dormData && dormData.doom) {
        document.getElementById("doom").value = dormData.doom;
        document.getElementById("dormTitle").textContent = dormData.doom;
    } else {
        document.getElementById("dormTitle").textContent = "ไม่พบข้อมูล";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    loadImagesOnOtherPage();

    const toggleIcon = document.getElementById("toggle-hour");
    const timeInputs = document.querySelectorAll("#time input");

    function isAllZeros() {
        return Array.from(timeInputs).every(input => input.value === "0");
    }

    function toggleInputs(disabled) {
        timeInputs.forEach(input => {
            input.disabled = disabled;
            if (disabled) {
                input.value = "0";
            }
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

    function updateToggleIcon() {
        if (isAllZeros()) {
            toggleIcon.classList.replace("bxs-toggle-left", "bxs-toggle-right");
            toggleInputs(true);
        } else {
            toggleIcon.classList.replace("bxs-toggle-right", "bxs-toggle-left");
            toggleInputs(false);
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

                updateToggleIcon();
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
        document.getElementById("doom").value = dormData.doom || "";
        document.getElementById("phone").value = dormData.phone || "";
        document.getElementById("notification").value = dormData.notification || "";
        document.getElementById("booking").value = dormData.booking || "";
        document.getElementById("contract").value = dormData.contract || "";

        let checkInArray = (dormData.checkInTime || "").split('');
        timeInputs.forEach((input, index) => {
            input.value = checkInArray[index] || "";
        });

        updateToggleIcon();
    }

    document.querySelectorAll('input').forEach(input => {
        input.addEventListener("blur", () => {
            saveToLocalStorage(input.id, input.value.trim());
        });
    });
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

function toggleEdit(id) {
    if (id === "checkInTime") {
        let timeInputs = document.querySelectorAll("#time input");
        let toggleIcon = document.getElementById("toggle-hour");

        let isReadOnly = timeInputs[0].disabled;

        timeInputs.forEach(input => {
            input.disabled = !isReadOnly;
            input.style.border = "1px solid black";
        });

        toggleIcon.style.pointerEvents = isReadOnly ? "auto" : "none";
        toggleIcon.style.opacity = isReadOnly ? "1" : "0.5";

        let editButton = document.querySelector('.edit[onclick="toggleEdit(\'checkInTime\')"]');
        editButton.textContent = isReadOnly ? "บันทึก" : "แก้ไข";

        if (!isReadOnly) {
            saveCheckInTime();
        }
    } else {
        let inputField = document.getElementById(id);
        let editButton = document.querySelector(`.edit[onclick="toggleEdit('${id}')"]`);

        if (inputField.readOnly) {
            inputField.readOnly = false;
            inputField.style.border = "1px solid black";
            editButton.textContent = "บันทึก";
        } else {
            if (id === "doom") {
                const inputValue = inputField.value.trim();
                if (inputValue.length > 20 || inputValue === "") {
                    let dormData = JSON.parse(localStorage.getItem("dormData")) || {};
                    inputField.value = dormData.doom || "";
                    alert("ชื่อหอพักต้องไม่เกิน 20 ตัวอักษรและต้องไม่ว่างเปล่า");
                    return;
                }
            }
            inputField.readOnly = true;
            inputField.style.border = "none";
            editButton.textContent = "แก้ไข";

            saveToLocalStorage(id, inputField.value.trim());
            location.reload();
        }
        if (id === "doom") {
            const inputLength = inputField.value.length;
            document.getElementById("char-count").textContent = `${inputLength}/20`;
        }
    }
}
function saveCheckInTime() {
    let timeInputs = document.querySelectorAll("#time input");
    let timeString = Array.from(timeInputs).map(input => input.value).join("");

    let dormData = JSON.parse(localStorage.getItem("dormData")) || {};
    dormData.checkInTime = timeString;
    localStorage.setItem("dormData", JSON.stringify(dormData));
}
function saveToLocalStorage(id, value) {
    let dormData = JSON.parse(localStorage.getItem("dormData")) || {};
    dormData[id] = value;
    localStorage.setItem("dormData", JSON.stringify(dormData));
    console.log("บันทึกค่า:", dormData);
}