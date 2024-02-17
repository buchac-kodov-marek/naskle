const hamburger = document.querySelector(".hamburger");
const krizik = document.querySelector(".cross");
const responsive_nav = document.querySelector(".responsive_nav");

function toggleNav() {
	responsive_nav.classList.toggle("open");
}
hamburger.addEventListener("click", () => {
	toggleNav();
});
krizik.addEventListener("click", () => {
	toggleNav();
});
