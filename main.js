//Selectors
let menuOpenBtn = document.querySelector(".fa-bars");

let menuCloseBtn = document.querySelector(".fa-times");

let ul = document.querySelector(".nav-ul");
let menuControl = document.querySelector(".hamburger-menu");
let header = document.querySelector(".my-header");

//add eventlistener on the hamburger

menuControl.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-bars")) {
    ul.classList.add("open-menu");
    menuOpenBtn.style.display = "none";
    menuCloseBtn.style.display = "inline";
  } else if (e.target.classList.contains("fa-times")) {
    ul.classList.remove("open-menu");
    menuCloseBtn.style.display = "none";
    menuOpenBtn.style.display = "inline";
  }
});

window.addEventListener('scroll',() =>{

 let height = window.scrollY;
  if (height >= 65) {
    header.classList.add("affix");
   
  } else {
    header.classList.remove("affix");
   
  }
});
