document.querySelector('.input-condition').addEventListener('change', function() {
    if (this.value.trim() === "ประเภทของหอพัก") {
        window.location.href = "#";
    } else if (this.value.trim() === "หอพักหญิง") {
        window.location.href = "../../Final project/doom/หอพักหญิง.html";
    }else if (this.value.trim() === "หอพักชาย") {
        window.location.href = "../../Final project/doom/หอพักชาย.html";
    }else if (this.value.trim() === "หอรวม") {
        window.location.href = "../../Final project/doom/หอพักรวม.html";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const deleteButtons = document.querySelectorAll(".main-box-bin i.bx-trash");
    const deleteAllButton = document.querySelector(".delete");
    const notificationContainer = document.querySelector(".box-grid");

    function checkEmptyNotifications() {
        if (!document.querySelector(".main-box")) {
            notificationContainer.innerHTML = `
            <div class="main-empty">
                <div class='empty-message'>
                    <img src="../images/การแจ้งเตือน 1.png"><br>
                    ศูนย์แจ้งเตือนของคุณว่างเปล่า ไม่มีการแจ้งเตือนที่ต้องดำเนินการ
                </div>
            </div>
            `
        }
    }

    deleteButtons.forEach(button => {
        button.addEventListener("click", function () {
            const notificationBox = this.closest(".main-box");
            if (notificationBox) {
                notificationBox.remove();
                checkEmptyNotifications();
            }
        });
    });

    deleteAllButton.addEventListener("click", function () {
        const notifications = document.querySelectorAll(".main-box");
        notifications.forEach(notification => notification.remove());
        checkEmptyNotifications();
    });

    checkEmptyNotifications();
});
