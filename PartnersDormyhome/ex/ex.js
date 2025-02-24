function loadImagesOnOtherPage() {
    for (let i = 1; i <= 5; i++) {
        const previewId = `preview${i}`;
        const savedImage = localStorage.getItem(previewId);
        if (savedImage) {
            const imageContainer = document.getElementById(previewId);
            if (imageContainer) {
                imageContainer.innerHTML = `<img src="${savedImage}" alt="Saved Image">`;
            }
        }
    }
}
window.onload = loadImagesOnOtherPage;

let doom = localStorage.getItem("doom");
    if (doom) {
        document.getElementById("doom-display").innerText = "ชื่อหอพัก: " + doom;
    } else {
            document.getElementById("doom-display").innerText = "ไม่พบข้อมูลชื่อหอพัก";
}