


// nav bar -  scrolling position fixed //

const navBar = document.querySelector(".nav_bar");
const navBarHeight = navBar.getBoundingClientRect().height;
const navElement = document.querySelector(".bar-menu")


document.addEventListener("scroll", () => {
if (window.scrollY > navBarHeight) {
        navBar.classList.add("nav_bar-dark")
} else {
    navBar.classList.remove("nav_bar-dark")
    
}
})









// nav bar - menu click and moving //


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



//// nav bar menu down !


const navToggle = document.querySelector(".nav_bar-toggle");

navToggle.addEventListener("click", () => {
    navElement.classList.toggle("open");
    
    navBar.classList.toggle("open");

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



// arrow up

const arrowUp = document.querySelector(".arrow__up");

arrowUp.addEventListener("click", () => {
    const homeUp = document.querySelector(".home");
    homeUp.scrollIntoView({behavior:"smooth"});
})


document.addEventListener("scroll", ()=> {
  if (window.scrollY > homeScreenHeight/2) {
      arrowUp.classList.remove("opacity-zero");
  } else {
      arrowUp.classList.add("opacity-zero");
  }

})





// projects //



const workCategories = document.querySelector(".work_categories");
const workProjectList = document.querySelector(".work_projects-list");


const projects = document.querySelectorAll(".work_projects-element");


workCategories.addEventListener("click", (event) => {
    const targetMenu = event.target;
    const targetSelect = targetMenu.dataset.type || targetMenu.parentElement.dataset.type;
    
    const selectedOne = document.querySelector(".work_menu.work_select")
    selectedOne.classList.remove("work_select");

    const menuSelected = event.target.nodeName === 'BUTTON' ? event.target : 
                                            event.target.parentNode;

    menuSelected.classList.add("work_select");


     workProjectList.classList.add("anim-out");
    setTimeout(() => {
    
    projects.forEach((project) => {
    if (targetSelect === "*" || targetSelect === project.dataset.element) {
        project.classList.remove("hidden");
    } else {
        project.classList.add("hidden");
    }
    });
    

    workProjectList.classList.remove("anim-out")}, 350);

})

