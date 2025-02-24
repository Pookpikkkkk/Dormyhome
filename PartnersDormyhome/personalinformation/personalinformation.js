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