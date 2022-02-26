


// nav bar -  scrolling //

const navBar = document.querySelector(".nav_bar");
const navBarHeight = navBar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
if (window.scrollY > navBarHeight) {
    navBar.classList.add("nav_bar-dark");
} else {
    navBar.classList.remove("nav_bar-dark")
}
})
