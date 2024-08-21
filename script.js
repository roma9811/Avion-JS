let dropDown = document.querySelectorAll(".dropdown");
let dropMenu = document.querySelectorAll(".dropdown-menu");
dropDown.forEach((item, index)=>{
item.addEventListener("click",()=>{
dropMenu[index].style.display = (dropMenu[index].style.display === "block" ? "none" : "block");
});
});
 



let burgerIcon = document.querySelector(".burger-icon");
let menuContainer = document.querySelector(".menu");
let cross = document.querySelector(".cross");
burgerIcon.addEventListener("click", () => {
burgerIcon.style.display = "none"
menuContainer.style.display = (menuContainer.style.display === "block") ? "none" : "block";
});


cross.addEventListener("click",()=>{
    menuContainer.style.display = "none";
    burgerIcon.style.display = "block";
})