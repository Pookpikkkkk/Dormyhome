function previewImage(event, previewId) {
    const input = event.target;
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const previewContainer = document.getElementById(previewId);
            previewContainer.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
            previewContainer.classList.add("has-image");

            localStorage.setItem(previewId, e.target.result);
        };
        reader.readAsDataURL(file);
    }
}

const inputElement = document.getElementById('priceInput');
inputElement.addEventListener('input', function () {
    let value = this.value.replace(/[^0-9]/g, '');
    this.value = value;
    saveFormData();
});
function saveFormData() {
    let formData = {};

    document.querySelectorAll('.main-item input[type="text"], .main-item input[type="number"]').forEach(input => {
        formData[input.id] = input.value;
    });

    document.querySelectorAll('.main-item input[type="radio"]:checked').forEach(radio => {
        formData[radio.name] = radio.value;
    });

    document.querySelectorAll('.main-item input[type="checkbox"]').forEach(checkbox => {
        formData[checkbox.id] = checkbox.checked;
    });

    localStorage.setItem('formData', JSON.stringify(formData));
}

function loadFormData() {
    let formData = JSON.parse(localStorage.getItem('formData'));
    if (!formData) return;

    document.querySelectorAll('.main-item input[type="text"], .main-item input[type="number"]').forEach(input => {
        if (formData[input.id] !== undefined) {
            input.value = formData[input.id];
        }
    });

    document.querySelectorAll('.main-item input[type="radio"]').forEach(radio => {
        if (formData[radio.name] === radio.value) {
            radio.checked = true;
        }
    });


    document.querySelectorAll('.main-item input[type="checkbox"]').forEach(checkbox => {
        if (formData[checkbox.id] !== undefined) {
            checkbox.checked = formData[checkbox.id];
        }
    });
}

function loadSavedImages() {
    for (let i = 1; i <= 5; i++) {
        const previewId = `preview${i}`;
        const savedImage = localStorage.getItem(previewId);
        if (savedImage) {
            const previewContainer = document.getElementById(previewId);
            previewContainer.innerHTML = `<img src="${savedImage}" alt="Saved Image">`;
            previewContainer.classList.add("has-image");
        }
    }
}

function checkSelection() {
    let allFilled = true;

    document.querySelectorAll('.main-item input[type="text"], .main-item input[type="number"]').forEach(input => {
        if (input.value.trim() === "") {
            allFilled = false;
        }
    });

    const radioGroups = document.querySelectorAll('.main-item input[type="radio"]');
    if (radioGroups.length > 0) {
        let radioChecked = false;
        radioGroups.forEach(radio => {
            if (radio.checked) radioChecked = true;
        });
        if (!radioChecked) allFilled = false;
    }

    const checkboxes = document.querySelectorAll('.main-item input[type="checkbox"].st-rd');
    if (checkboxes.length > 0) {
        let checkboxChecked = false;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) checkboxChecked = true;
        });
        if (!checkboxChecked) allFilled = false;
    }

    let hasImage = false;
    for (let i = 1; i <= 4; i++) {
        if (localStorage.getItem(`preview${i}`)) {
            hasImage = true;
        }
    }
    if (!hasImage) allFilled = false;

    const buttons = document.querySelectorAll('.button-ex, .button-add');
    buttons.forEach(button => {
        if (allFilled) {
            button.disabled = false;
            button.style.backgroundColor = "#20B2AA";
            button.style.cursor = "pointer";
        } else {
            button.disabled = true;
            button.style.backgroundColor = "#D9D9D9";
            button.style.cursor = "not-allowed";
        }
    });

    saveFormData();
}
window.onload = function () {
    loadFormData();
    loadSavedImages();
    checkSelection();
};

document.querySelectorAll('.main-item input').forEach(input => {
    input.addEventListener('input', checkSelection);
});

document.querySelectorAll('.main-item input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', checkSelection);
});

document.querySelectorAll('.main-item input[type="file"]').forEach(input => {
    input.addEventListener('change', checkSelection);
});