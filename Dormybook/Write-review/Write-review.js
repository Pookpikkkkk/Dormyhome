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

document.addEventListener("DOMContentLoaded", () => {
    const starContainers = document.querySelectorAll("#stars");

    starContainers.forEach((starsContainer) => {
        const stars = starsContainer.querySelectorAll("i");

        const ratingDisplay = document.createElement("span");
        ratingDisplay.classList.add("ratingDisplay");
        ratingDisplay.style.marginLeft = "10px"; 
        starsContainer.appendChild(ratingDisplay);

        function updateRatingDisplay(rating) {
            ratingDisplay.textContent = `(${rating}/5)`;
        }

        stars.forEach((star, index) => {
            star.addEventListener("click", () => {
                stars.forEach((s, i) => {
                    if (i <= index) {
                        s.classList.replace("bx-star", "bxs-star");
                    } else {
                        s.classList.replace("bxs-star", "bx-star");
                    }
                });
                updateRatingDisplay(index + 1);
            });
        });

        updateRatingDisplay(0);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const fileInputs = document.querySelectorAll(".file-upload input[type='file']");

    fileInputs.forEach(input => {
        input.addEventListener("change", function () {
            const fileName = this.files[0] ? this.files[0].name : "อัปโหลดไฟล์";
            const previewContainer = this.closest(".file-upload").querySelector(".preview-container");
            if (previewContainer) {
                previewContainer.textContent = fileName;
            }
        });
    });
});