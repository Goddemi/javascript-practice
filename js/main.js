



// nav bar -  scrolling position fixed //


const navBar = document.querySelector(".nav_bar");
const navBarHeight = navBar.getBoundingClientRect().height;


 document.addEventListener("scroll", () => {
     window.scrollY > navBarHeight ? 
     navBar.classList.add("nav_bar-background")
     : navBar.classList.remove("nav_bar-background");
 })



// document.addEventListener("scroll", () => {
// if (window.scrollY > navBarHeight) {
//         navBar.classList.add("nav_bar-background")
// } else {
//     navBar.classList.remove("nav_bar-background")
    
// }
// })





// nav bar - menu click and moving //

const navMenu = document.querySelector(".bar-menu")

navMenu.addEventListener("click", (e) => {
    const target = e.target;
    const targetData = target.dataset.menu;
    
    if (targetData) {scrollIntoView(`.${targetData}`)
    } else {return;}
})



function scrollIntoView(selector) {
    let selected = document.querySelector(selector)
    selected.scrollIntoView({behavior:"smooth"});
}



// contact btn scrolling //



const contactBtn = document.querySelector(".contact-btn")

contactBtn.addEventListener("click",  () => {
    const contactMenu = document.querySelector(".contact");
    contactMenu.scrollIntoView({behavior:"smooth"});

});


// contactBtn.addEventListener("click", scrollIntoView("contact"));

// 바뀌는 값이고 이건 절대 값이다. 




/// scrolling - nav bar menu effect





//// nav bar toggle menu down !


const navToggle = document.querySelector(".nav_bar-toggle");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    navBar.classList.toggle("open");
   
});

navBar.addEventListener("mouseleave", () => {
    navMenu.classList.remove("open");
    navBar.classList.remove("open");
});





// scrolling with fade-out

const homeScreen = document.querySelector(".home");
const homeHeight = homeScreen.getBoundingClientRect().height;
const homeHeader = document.querySelector(".home .header")


document.addEventListener("scroll", () => {
    homeHeader.style.opacity = 1.25 - window.scrollY / homeHeight
});






// const homeScreen = document.querySelector(".home");
// const homeScreenHeight = homeScreen.getBoundingClientRect().height;
// const homeOpaityElement = document.querySelector(".home .header")

// document.addEventListener("scroll", () => {
//     const opacityValue = 1.25- window.scrollY/homeScreenHeight;
//     homeOpaityElement.style.opacity = opacityValue;
// })




// arrow up

const arrowUp = document.querySelector(".arrow__up");

arrowUp.addEventListener("click", () => {
    const homeUp = document.querySelector(".home");
    homeUp.scrollIntoView({behavior:"smooth"});
})


document.addEventListener("scroll", ()=> {
  if (window.scrollY > homeHeight/2) {
      arrowUp.classList.remove("opacity-zero");
  } else {
      arrowUp.classList.add("opacity-zero");
  }

})





// projects //




const workCategories = document.querySelector(".work_categories");
const workProjectList = document.querySelector(".work_projects-list")
const workProjects = document.querySelectorAll(".work_projects-element");


workCategories.addEventListener("click", (e) => {
    const targetOne = e.target;
    const targetMenu = targetOne.dataset.type || targetOne.parentElement.dataset.type;
    

    const selectedOne = targetOne.nodeName === "BUTTON" ? 
    targetOne :
    targetOne.parentNode;
    const selectDelete = document.querySelector(".work_select");
    selectDelete.classList.remove("work_select")

    selectedOne.classList.add("work_select");





    workProjectList.classList.add("anim-out");

    setTimeout(()=> {

        workProjects.forEach((project) => {
            if ( targetMenu === project.dataset.element || 
                targetMenu === "*") {
                    project.classList.remove("hidden")
                } else {
                    project.classList.add("hidden")
                }
        })


        workProjectList.classList.remove("anim-out");
    }, 350)

})



