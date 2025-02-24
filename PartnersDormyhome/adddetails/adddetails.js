document.addEventListener("DOMContentLoaded", () => {
    // ดึงข้อมูลจาก localStorage (ถ้ามี)
    const dormData = JSON.parse(localStorage.getItem("dormData"));
    if (dormData) {
        document.getElementById("doom").value = dormData.doom;
        document.getElementById("room").value = dormData.room;
        document.getElementById("phone").value = dormData.phone;
        document.getElementById("nearbyPlace").value = dormData.nearbyPlace;
        document.getElementById("notification").value = dormData.notification;
        document.getElementById("booking").value = dormData.booking;
        document.getElementById("contract").value = dormData.contract;
    }

    // ตรวจสอบการกรอกข้อมูล
    function checkSelection() {
        const doomInput = document.getElementById("doom").value.trim();
        const roomInput = document.getElementById("room").value.trim();
        const phoneInput = document.getElementById("phone").value.trim();
        const nearbyPlaceInput = document.getElementById("nearbyPlace").value.trim();
        const notificationInput = document.getElementById("notification").value.trim();
        const bookingInput = document.getElementById("booking").value.trim();
        const contractInput = document.getElementById("contract").value.trim();
        const nextBtn = document.getElementById("nextBtn");

        if (doomInput && roomInput && phoneInput && nearbyPlaceInput && notificationInput && bookingInput && contractInput) {
            nextBtn.classList.add("active");
            nextBtn.removeAttribute("disabled");
        } else {
            nextBtn.classList.remove("active");
            nextBtn.setAttribute("disabled", true);
        }
    }

    // ตรวจสอบเบอร์โทร
    function validatePhone() {
        const phoneInput = document.getElementById("phone");
        const errorMessage = document.getElementById("phone-error");
        const phonePattern = /^0[0-9]{9}$/;
        if (phonePattern.test(phoneInput.value) {
            phoneInput.style.border = "1px solid #ccc";
            errorMessage.innerText = "";
        } else {
            phoneInput.style.border = "2px solid red";
            errorMessage.innerText = "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง";
        }
    }

    // บันทึกข้อมูล
    document.getElementById("nextBtn").addEventListener("click", () => {
        const dormData = {
            doom: document.getElementById("doom").value,
            room: document.getElementById("room").value,
            phone: document.getElementById("phone").value,
            nearbyPlace: document.getElementById("nearbyPlace").value,
            notification: document.getElementById("notification").value,
            booking: document.getElementById("booking").value,
            contract: document.getElementById("contract").value
        };

        localStorage.setItem("dormData", JSON.stringify(dormData));
        window.location.href = "personalinformation.html";
    });

    // ตรวจสอบการกรอกข้อมูลทุกครั้งที่ผู้ใช้พิมพ์
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener("input", checkSelection);
    });
});