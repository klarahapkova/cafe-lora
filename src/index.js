import "./style.css";

console.log("funguju!");

const buttonElm = document.querySelector("#nav__btn");
const navElm = document.querySelector("#nav");
const navItems = document.querySelectorAll("#nav__items");

buttonElm.addEventListener("click", () => {
  navElm.classList.toggle("nav-closed");
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navElm.classList.toggle("nav-closed");
  });
});
