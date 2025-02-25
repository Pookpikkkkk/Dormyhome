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
    const phoneInput = document.getElementById("phone");
    phoneInput.value = phoneInput.value.replace(/\D/g, "");
}
function toggleEdit(id) {
    let inputField = document.getElementById(id);
    let editButton = document.querySelector(`.edit[onclick="toggleEdit('${id}')"]`);

    if (inputField.readOnly) {
        inputField.readOnly = false;
        inputField.style.border = "1px solid black";
        editButton.textContent = "บันทึก";
    } else {
        inputField.readOnly = true;
        inputField.style.border = "none";
        editButton.textContent = "แก้ไข";

        let dormData = JSON.parse(localStorage.getItem("dormData")) || {};
        dormData[id] = inputField.value.trim();
        localStorage.setItem("dormData", JSON.stringify(dormData));
    }
}

function toggleEdit(id) {
    if (id === "checkInTime") {
        let timeInputs = document.querySelectorAll("#time input");
        let toggleIcon = document.getElementById("toggle-hour");

        let isReadOnly = timeInputs[0].disabled;

        timeInputs.forEach(input => {
            input.disabled = !isReadOnly;
            input.style.border = isReadOnly ? "1px solid black" : "none";
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
        let editButton = inputField.nextElementSibling;

        if (inputField.readOnly) {
            inputField.readOnly = false;
            inputField.style.border = "1px solid black";
            editButton.textContent = "บันทึก";
        } else {
            inputField.readOnly = true;
            inputField.style.border = "none";
            editButton.textContent = "แก้ไข";

            let dormData = JSON.parse(localStorage.getItem("dormData")) || {};
            dormData[id] = inputField.value.trim();
            localStorage.setItem("dormData", JSON.stringify(dormData));
        }
    }
}
function toggleEdit(id) {
    if (id === "checkInTime") {
        let timeInputs = document.querySelectorAll("#time input");
        let toggleIcon = document.getElementById("toggle-hour");

        let isReadOnly = timeInputs[0].disabled;

        timeInputs.forEach(input => {
            input.disabled = !isReadOnly;
            input.style.border = isReadOnly ? "1px solid black" : "none";
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
            inputField.readOnly = true;
            inputField.style.border = "none";
            editButton.textContent = "แก้ไข";

            let dormData = JSON.parse(localStorage.getItem("dormData")) || {};
            dormData[id] = inputField.value.trim();
            localStorage.setItem("dormData", JSON.stringify(dormData));
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