document.querySelector('.input-condition').addEventListener('change', function() {
    if (this.value.trim() === "ประเภทของหอพัก") {
        window.location.href = "#";
    } else if (this.value.trim() === "หอพักหญิง") {
        window.location.href = "#";
    }else if (this.value.trim() === "หอพักชาย") {
        window.location.href = "#";
    }else if (this.value.trim() === "หอรวม") {
        window.location.href = "#";
    }
});
function loadImagesOnOtherPage() {
    for (let i = 1; i <= 3; i++) {
        const previewId = `preview${i}`;
        const savedImage = localStorage.getItem(previewId);
        if (savedImage) {
            const imageContainer = document.getElementById(previewId);
            if (imageContainer) {
                imageContainer.innerHTML = `<img src="${savedImage}" alt="Saved Image" style="max-width: 100%; height: auto;">`;
            }
        }
    }
}
window.onload = loadImagesOnOtherPage;