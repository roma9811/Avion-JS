let dropDown = document.querySelectorAll(".dropdown");
let dropMenu = document.querySelectorAll(".dropdown-menu");
dropDown.forEach((item, index)=>{
item.addEventListener("click",()=>{
dropMenu[index].style.display = (dropMenu[index].style.display === "block" ? "none" : "block");
});
});
 
let burgerIcon = document.querySelector(".burger-icon");
let menuContainer = document.querySelector(".menu");


burgerIcon.addEventListener("click", () => {
menuContainer.style.display = (menuContainer.style.display === "block") ? "none" : "block";
});
 
let shopItems = [{
     chairs:'sofa',new:true,
     price: '£980',
     color: 'green',
     image: 'Large.png.'},
    {
    chairs:'The Dandy chair',new:false,
     price: '£250',
     color: 'black',
     image: 'dandy.png'},
     {
     chairs:'The Dandy chair',new:true,
     price: '£250',
     color: 'gray',
     image: 'Parent.png'}
];
shopItems.forEach((item)=>{
    console.log(item.chairs)
})