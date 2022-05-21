// navbar

const navBar = document.querySelector(".nav_bar");

const section = document.querySelectorAll(".section");
const sectionArray = [...section];

navBar.addEventListener("click", (e) => {
  const clickedOne = e.target;

  const scrollingTo = sectionArray.find((element) => {
    return element.dataset.section === clickedOne.innerHTML;
  });

  scrollingTo.scrollIntoView({ behavior: "smooth" });
});

// Likes contents
