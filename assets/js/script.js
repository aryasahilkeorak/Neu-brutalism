document.addEventListener("DOMContentLoaded", function () {
    const navToggler = document.getElementById("navToggler");
    const headerNavbar = document.querySelector(".header-navbar");

    navToggler.addEventListener("click", function () {
        headerNavbar.classList.toggle("navbar-expand");
    });
});
