const btn = document.querySelector(".js-header__burger");
const pages = document.querySelector(".js-header__pages");
btn.addEventListener("click", function () {
    pages.classList.toggle("active");
    btn.classList.toggle("close");
});
