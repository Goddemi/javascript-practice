
const userName = localStorage.getItem("name");
const mainName = document.querySelector(".main-name");
mainName.innerHTML = `${userName}'s`



// 시계 // 



const timeSet = document.querySelector(".main-time");

function timeClock() {

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    

    timeSet.innerHTML = `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분 ${second}초`
}

timeClock()
setInterval(timeClock, 1000);




// Monthly Theme //




const monthlyTheme = document.querySelector(".monthly-theme");
const monthlyInput = monthlyTheme.querySelector(".monthly-input");
const monthlyContent = document.querySelector(".monthly-theme__content");


function changeMonthly(monthlyValue) {

    const monthlyChange = document.createElement("div");
    monthlyChange.classList.add("monthly-content__change");
    monthlyChange.classList.add("monthly-theme__change");
    monthlyChange.innerHTML = monthlyValue;
    monthlyContent.appendChild(monthlyChange);
}



function getMonthlyInput(e) {
    e.preventDefault();
    const monthlyValue = monthlyInput.value;
    localStorage.setItem("monthly", monthlyValue);
    monthlyInput.classList.add("hidden");
    changeMonthly(monthlyValue);

}

const monthlyOrigin = localStorage.getItem("monthly");

if (monthlyOrigin) {
    changeMonthly(monthlyOrigin);
    monthlyInput.classList.add("hidden");
}



monthlyTheme.addEventListener("submit", getMonthlyInput);


function getBackInput() {
    const monthlyDelete = document.querySelector(".monthly-content__change");
    monthlyDelete.remove();
    monthlyInput.classList.remove("hidden");
}


monthlyContent.addEventListener("click", getBackInput);





// Todo List //



const todoForm = document.querySelector(".weekly-writing");
const todoInput = todoForm.querySelector("input");
const todoLineup = document.querySelector(".weekly-goal__content");
let todoArray = [];


function todoSending(todoValue) {
    const todoList = document.createElement("li");
    todoList.innerHTML = todoValue.name;
    todoList.id = todoValue.id;
    todoLineup.appendChild(todoList);
        
    const todoBtn = document.createElement("button");
    todoBtn.innerHTML = "✨";
    todoList.appendChild(todoBtn);

    
    function deleteList(event) {
        todoList.classList.add("hidden");
        const todoTarget = event.target.parentElement;

        todoArray = todoArray.filter(e => e.id !== parseInt(todoTarget.id));
        localStorage.setItem("todo", JSON.stringify(todoArray));
        
    }


    todoBtn.addEventListener("click", deleteList)


}



function todoSubmit(e) {
    e.preventDefault();
    const todoValue = {
        name: todoInput.value,
        id : Date.now(),
    }
    todoArray.push(todoValue);
    localStorage.setItem("todo", JSON.stringify(todoArray));
    todoInput.value = "";
    todoSending(todoValue);

    
}



const todoOrigin = JSON.parse(localStorage.getItem("todo"));

if (todoOrigin) {
    todoOrigin.forEach(element => todoSending(element));
}

todoForm.addEventListener("submit", todoSubmit)


