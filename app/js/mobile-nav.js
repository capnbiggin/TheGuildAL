

function addActive() {
    const navToggle = document.querySelector(".topnav__menu");
    const body = document.querySelector('body');
    navToggle.classList.add("nav-active")
    bodyScrollLockUpgrade.disableBodyScroll(body);
}

function removeAtive() {
    const navToggle = document.querySelector(".topnav__menu");
    const body = document.querySelector('body');
    navToggle.classList.remove("nav-active")
    bodyScrollLockUpgrade.enableBodyScroll(body);
}