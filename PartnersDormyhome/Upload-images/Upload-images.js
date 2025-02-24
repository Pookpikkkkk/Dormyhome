document.addEventListener("DOMContentLoaded", function () {
    const fileInputs = document.querySelectorAll(".file-upload input[type='file']");
    const nextBtn = document.getElementById("nextBtn");

    function checkAllInputs() {
        const allFilled = [...fileInputs].every(input => input.files.length > 0);
        if (allFilled) {
            nextBtn.classList.add("active");
            nextBtn.disabled = false;
        } else {
            nextBtn.classList.remove("active");
            nextBtn.disabled = true;
        }
    }

    fileInputs.forEach(input => {
        input.addEventListener("change", function () {
            const fileName = this.files[0] ? this.files[0].name : "อัปโหลดไฟล์";
            const label = this.nextElementSibling; 
            label.innerHTML = `<i class='bx bx-file'></i> ${fileName}`;
            checkAllInputs();
        });
    });
});
