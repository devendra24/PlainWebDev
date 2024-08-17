import { menu, menuCard } from "./app.js";
const menuItem = document.getElementById("menuItem");
console.log(menuItem);
menu.forEach(item => menuItem.innerHTML += menuCard(item));