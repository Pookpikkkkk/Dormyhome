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