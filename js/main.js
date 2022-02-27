


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




// nav bar - menu click and moving //

const navElement = document.querySelector(".bar-menu");

navElement.addEventListener("click", (event) => {
    
    const target = event.target;
    const menu = target.dataset.menu;
    if (!menu) {
        return;
    } else {
    const element = document.querySelector(`.${menu}`); 

    element.scrollIntoView({behavior:"smooth"});
}

})



// contact btn scrolling //



const contactBtn = document.querySelector(".contact-btn");

contactBtn.addEventListener("click", 
    () => {
        const contactMenu = document.querySelector(".contact");
        contactMenu.scrollIntoView({behavior:"smooth"});
    }

)


// function scrollIntoView(seletor) {
//     const scrollTo = document.querySelector("selector");
//     scrollTo.scrollIntoView({behavior:"smooth"});
// }
// 펑션 지정해 두고 간단하게 쓰기. 



// scrolling with fade-out

const homeScreen = document.querySelector(".home");
const homeScreenHeight = homeScreen.getBoundingClientRect().height;
const homeOpaityElement = document.querySelector(".home .header")

document.addEventListener("scroll", () => {
    const opacityValue = 1- window.scrollY/homeScreenHeight;
    homeOpaityElement.style.opacity = opacityValue;
})

