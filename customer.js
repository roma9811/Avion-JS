 document.addEventListener("DOMContentLoaded",() => {
let burgerIcon = document.querySelector(".burger-icon");
let menuContainer = document.querySelector(".menu");
let cross = document.querySelector(".cross");
let search1 = document.querySelector(".search1");
let search_btn = document.querySelector(".search_btn");
let main = document.querySelector("main");
let ulList = document.querySelector(".userList");


burgerIcon.addEventListener("click", () => {
burgerIcon.style.display = "none"
menuContainer.style.display = (menuContainer.style.display === "block") ? "none" : "block";
});


cross.addEventListener("click",()=>{
    menuContainer.style.display = "none";
    burgerIcon.style.display = "block";
});



const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        if (data) {
            data.forEach((user) => {
                let liList = document.createElement("li");
                liList.className = "liList";
                if (user.name && user.phone && user.email && user.username && user.company.name && user.address.city){
                    liList.innerHTML = `Name:${user.name} <br>
                                        Phone:${user.phone} <br>
                                        Email:${user.email} <br>
                                        User-Name:${user.username} <br>
                                        Company:${user.company.name}<br>
                                        City:${user.address.city}`;
                                        ulList.appendChild(liList);
                                    }
                });
            }
        })
        .catch(error => console.log(error));
    }
fetchData();

search_btn.addEventListener("click", () => {
    let input = search1.value.toLowerCase();
    let liList = document.querySelectorAll(".liList");
    liList.forEach((li) => {
      let text = li.textContent.toLowerCase();
      if (text.includes(input)) {
        li.style.display = "block";
      } else {
        li.style.display = "none";
      }
    });
  });

});






