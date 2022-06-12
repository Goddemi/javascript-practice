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

// 1. 누른다.
// 2. 기존의 것이 없어진다. 클래스에 hidden 이 추가된다.
// 3. 누른것의 data set을 찾는다. 그 데이터 set이 아닌 것들에 hidden이 추가된다.
// 4. 그 데이터 set에 속하는 것들에 hidden을 뺀다.

const likeMenu = document.querySelector(".likes_box");
const likeContents = document.querySelectorAll(".likes_contents");
const arrayLikeContents = [...likeContents];

function contentDeleting(groupName) {
  arrayLikeContents.forEach((content) => {
    content.classList.add("disappear");
    if (content.dataset.group !== groupName) {
      setTimeout(() => {
        content.classList.add("hidden");
      }, 500);
    } else {
      setTimeout(() => {
        content.classList.remove("hidden");
      }, 500);
    }
    setTimeout(() => {
      content.classList.remove("disappear");
    }, 500);
  });
}

//왜 됐다 안됐따함..?

function disappear(content) {}

function contentChanging(event) {
  let groupName;
  if (event.target.className === "likes_name") {
    groupName = event.target.innerHTML;
    contentDeleting(groupName);
  } else return;
}

likeMenu.addEventListener("click", contentChanging);
