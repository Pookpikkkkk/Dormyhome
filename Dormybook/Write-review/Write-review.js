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
