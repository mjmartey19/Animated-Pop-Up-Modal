const hireBtn = document.querySelector("#hireBtn"),
popUp = document.querySelector(".pop_up"),
cancelBtn = document.querySelector(".cancel"),
sendBtn = document.querySelector(".send"),
hideIcon = document.querySelector(".hide");
console.log(sendBtn);

hireBtn.addEventListener("click", ()=>{
    popUp.classList.add("active")
});

cancelBtn.addEventListener("click", ()=>{
    popUp.classList.remove("active")
});
sendBtn.addEventListener("click", ()=>{
   window.location = "index.html";
});

hideIcon.addEventListener("click", ()=>{
    popUp.classList.remove("active")
});