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

//contents

// const likesBox = document.querySelector(".likes_box");
// const likeContents = document.querySelectorAll(".likes_contents");
// const newlikeContents = [...likeContents];

// let menuName;

// function contentClassify(event) {
//   if (event.target.className !== "likes_box") {
//     menuName = event.target.innerHTML;
//     const newnew = newlikeContents.filter((content) => {
//       content.dataset.group === menuName;
//     });
//     newnew.forEach((content) => {
//       if (content.classList.contains("hidden")) {
//         content.classList.remove("hidden");
//       }
//     });
//   }
// }

// likesBox.addEventListener("click", contentClassify);

// dataset.group;
