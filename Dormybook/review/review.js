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
