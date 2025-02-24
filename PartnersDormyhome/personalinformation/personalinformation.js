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
window.onload = loadImagesOnOtherPage;

document.addEventListener("DOMContentLoaded", () => {
    function enableEditing(button, fieldId) {
        const field = document.getElementById(fieldId);
        const isEditing = field.getAttribute("data-editing") === "true";

        if (isEditing) {
            const inputValue = field.querySelector("input").value;
            field.innerHTML = inputValue;
            field.setAttribute("data-editing", "false");
            button.textContent = "แก้ไข";

            localStorage.setItem(fieldId, inputValue);
        } else {
            const currentValue = field.textContent.trim();
            field.innerHTML = `<input type="text" value="${currentValue}" id="${fieldId}-input">`;
            field.setAttribute("data-editing", "true");
            button.textContent = "บันทึก";
        }
    }

    document.querySelectorAll(".edit").forEach((button) => {
        button.addEventListener("click", () => {
            const fieldId = button.previousElementSibling.id;
            enableEditing(button, fieldId);
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const fields = ["dormName", "checkInTime", "phoneNumber", "notificationDays", "bookingMonths", "contractDuration"];

    fields.forEach(fieldId => {
        const element = document.getElementById(fieldId);
        const savedValue = localStorage.getItem(fieldId) || "ไม่ระบุ";
        if (element) {
            element.textContent = savedValue;
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const storedData = localStorage.getItem("dormData");
    if (storedData) {
        const dormData = JSON.parse(storedData);
        document.getElementById("dormName").textContent = dormData.dormName || "-";
        document.getElementById("roomCount").textContent = dormData.roomCount || "-";
        document.getElementById("phoneNumber").textContent = dormData.phoneNumber || "-";
        document.getElementById("notificationDays").textContent = dormData.notificationDays || "-";
        document.getElementById("bookingMonths").textContent = dormData.bookingMonths || "-";
        document.getElementById("contractDuration").textContent = dormData.contractDuration || "-";
    }
});

function toggleEdit(fieldId) {
    const field = document.getElementById(fieldId);
    if (field.contentEditable === "true") {
        field.contentEditable = "false";
        localStorage.setItem("dormData", JSON.stringify({ ...JSON.parse(localStorage.getItem("dormData")), [fieldId]: field.textContent }));
    } else {
        field.contentEditable = "true";
        field.focus();
    }
}