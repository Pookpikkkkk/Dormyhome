document.addEventListener("DOMContentLoaded", () => {
    // ดึงข้อมูลจาก localStorage
    const dormData = JSON.parse(localStorage.getItem("dormData"));

    if (dormData) {
        // แสดงข้อมูลในหน้า
        document.getElementById("dormName").textContent = dormData.doom;
        document.getElementById("phoneNumber").textContent = dormData.phone;
        document.getElementById("notificationDays").textContent = `${dormData.notification} วัน`;
        document.getElementById("bookingMonths").textContent = `${dormData.booking} เดือน`;
        document.getElementById("contractDuration").textContent = `${Math.floor(dormData.contract / 12)} ปี ${dormData.contract % 12} เดือน`;
    }

    // เมื่อคลิกปุ่ม "แก้ไข"
    document.getElementById("editButton").addEventListener("click", () => {
        window.location.href = "adddetails.html";
    });
});