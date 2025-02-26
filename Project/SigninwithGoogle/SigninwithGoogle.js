function registeredaccount() {
    let email = document.getElementById("email").innerText;
    let account = document.getElementById("account").innerText;
    localStorage.setItem("registeredemail", email);
    localStorage.setItem("registeredpassword", "xxxxxxxx");
    localStorage.setItem("registeredaccount", account);
    window.location.href = "../google/google.html";
}
function registeredaccountadmin() {
    let email = document.getElementById("emailemail-admin").innerText;
    localStorage.setItem("registeredemailadmin", email);
    localStorage.setItem("registeredpasswordadmin", "12345678");
    localStorage.setItem("registeredaccountadmin", "admin");
    window.location.href = "../google-admin/google.html";
}