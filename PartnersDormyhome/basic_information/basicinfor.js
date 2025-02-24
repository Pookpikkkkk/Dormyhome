function checkSelection() {
    let businessSelected = document.querySelector('input[name="business-type"]:checked');
    let bankSelected = document.querySelector('input[name="bank-account"]:checked');
    let provinceInput = document.getElementById("provinceInput").value.trim();
    let nextBtn = document.getElementById("nextBtn");

    if (businessSelected && bankSelected && provinceInput !== "") {
        nextBtn.classList.add("active");
        nextBtn.removeAttribute("disabled");
    } else {
        nextBtn.classList.remove("active");
        nextBtn.setAttribute("disabled", true);
    }
}
document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener("change", checkSelection);
});
document.getElementById("provinceInput").addEventListener("input", checkSelection);