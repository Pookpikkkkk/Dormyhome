document.querySelector('.input-condition').addEventListener('change', function() {
    if (this.value.trim() === "ประเภทของหอพัก") {
        window.location.href = "#";
    } else if (this.value.trim() === "หอพักหญิง") {
        window.location.href = "#";
    }else if (this.value.trim() === "หอพักชาย") {
        window.location.href = "../../Final project/หอพัก/หอพักชาย.html";
    }else if (this.value.trim() === "หอรวม") {
        window.location.href = "#";
    }
});
