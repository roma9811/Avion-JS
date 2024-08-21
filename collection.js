 let shopItems = [{
    item: 'Chair',
    price: '£50',
    image: './images/dandy.png',
},
{
    item: 'Rustic Vase Set',
    price: '£155',
    image: './images/vase.png',
},
{
    item: 'The Silky Vase',
    price: '£125',
    image: './images/silky vase.png'
},
{
    item: 'The Lucy Lamp',
    price: '£80',
    image: './images/lamp.png',
},
{
    item: 'Yellow Lamp',
    price: '£250',
    image: './images/lamp2.png'
},
{
    item: 'White Vase Set',
    price: '£155',
    image: './images/vase.png'
},
{
    item: 'Yellow Chair',
    price: '£125',
    image: './images/yellow-chair.png'
},
{
    item: 'Orange Chair',
    price: '£399',
    image: './images/yellow-chair2.png'
},
{
    item: 'Gray Chair',
    price: '£250',
    image: './images/Parent.png'
}
];

let main = document.querySelector(".main");

let cards = (shopItems) => {
shopItems.forEach((item) => {
    let cardElement = document.createElement("div");
    cardElement.className = "cardGrid";

   let img = document.createElement("img");
    img.src = item.image;
    let title = document.createElement("h3");
    title.innerText = item.item;

    let price = document.createElement("p");
    price.innerText = item.price;

    cardElement.appendChild(img);
    cardElement.appendChild(title);
    cardElement.appendChild(price);

    main.appendChild(cardElement);
});
}

cards(shopItems);

let productType = document.querySelector(".productType");

productType.addEventListener("click", () => {
    let productTypeValue = productType.value;
    let showClick;
    if (productTypeValue === "1") {
        showClick = shopItems.filter(item => item.item.includes("Chair"));
    } else if (productTypeValue === "2") {
        showClick = shopItems.filter(item => item.item.includes("Lamp"));
    } else if (productTypeValue === "3") {
        showClick = shopItems.filter(item => item.item.includes("Vase"));
    } else {
        showClick = shopItems;
    }
    main.innerHTML = "";
    cards(showClick);
});



 let sortBtn = document.querySelector(".sort");

 sortBtn.addEventListener('change', () => {
    let sortValue = sortBtn.value;
    if (sortValue === 'less') {
        shopItems.sort((a, b) => {
            let priceA = a.price.replace('£', '');
            let priceB = b.price.replace('£', '');
            return priceA - priceB; 
        });
    } else if (sortValue === 'more') {
        shopItems.sort((a, b) => {
            let priceA =a.price.replace('£', '');
            let priceB =b.price.replace('£', '');
            return priceB - priceA; 
        });
    }

    main.innerHTML = ""; 
    cards(shopItems);
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