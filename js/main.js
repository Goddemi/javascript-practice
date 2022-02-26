


// nav bar -  scrolling position fixed //

const navBar = document.querySelector(".nav_bar");
const navBarHeight = navBar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
if (window.scrollY > navBarHeight) {
    navBar.classList.add("nav_bar-dark");
} else {
    navBar.classList.remove("nav_bar-dark")
}
})

900

console.log(window.scrollY);


// nav bar - menu click and moving //

const navElement = document.querySelector(".bar-menu");

navElement.addEventListener("click", (event) => {
    console.log(event.target.dataset.menu);
    const target = event.target;
    const menu = target.dataset.menu;

    const element = document.querySelector(`.${menu}`); 

    element.scrollIntoView({behavior:"smooth"});


}




)
