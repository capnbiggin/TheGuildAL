const navMenu = document.querySelector(".topnav__menu");

const bodyScroll = document.querySelector("body");
const menuOpen = document.querySelector("#menuOpen");
const menuClose = document.querySelector("#menuClose");
const media = window.matchMedia("(width < 48.4375rem)");
const main = document.querySelector("main");

function openMobileMenu() {
	menuOpen.setAttribute("aria-expanded", "true");
	navMenu.removeAttribute("inert");
	navMenu.removeAttribute("style");
	main.setAttribute("inert", "");
	bodyScrollLockUpgrade.disableBodyScroll(bodyScroll);
	menuClose, focus();
}

function closeMobileMenu() {
	menuOpen.setAttribute("aria-expanded", "false");
	navMenu.setAttribute("inert", "");
	main.removeAttribute("inert");
	bodyScrollLockUpgrade.enableBodyScroll(bodyScroll);
	menuOpen.focus();

	setTimeout(() => {
		navMenu.style.transition = "none";
	}, 500);
}

function setupTopNav(e) {
	if (e.matches) {
		// is mobile
		console.log("is mobile");
		navMenu.setAttribute("inert", "");
		navMenu.style.transition = "none";
	} else {
		// is tablet/desktop
		console.log("is desktop");
		closeMobileMenu();
		navMenu.removeAttribute("inert");
	}
}

setupTopNav(media);

menuOpen.addEventListener("click", openMobileMenu);
menuClose.addEventListener("click", closeMobileMenu);

media.addEventListener("change", function (e) {
	setupTopNav(e);
});
