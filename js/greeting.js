const greetingBody = document.querySelector(".greeting-body");

const myImg = ["background 1.jpg", "background 2.jpg", "background 3.jpg"]
const randomNumber = Math.floor((Math.random()*myImg.length));
const greetingImg = myImg[randomNumber];

const imgSending = document.createElement("img");
imgSending.src = `img/${greetingImg}`

greetingBody.appendChild(imgSending);


const greetingForm = document.querySelector(".user-name");
const greetingInput = greetingForm.querySelector("input");


function gotoTodolist(e) {
    e.preventDefault();
    const nameValue = greetingInput.value;
    localStorage.setItem("name", nameValue);
    console.log(nameValue);
    greetingInput.value = "";
    location.href = "lifedesigner.html";
}


greetingForm.addEventListener("submit", gotoTodolist)