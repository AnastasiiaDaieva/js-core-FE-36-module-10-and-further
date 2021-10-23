import docRefs from "./refs.js";

const { body: bodyRef } = docRefs;
console.log(bodyRef);

import data from "../db/photo.json";
// console.log(data);

import template from "../templates/photo.hbs";
// console.log(template);

const items = template(data);
// console.log(items);

bodyRef.insertAdjacentHTML("afterbegin", items);

const btnAdd = document.createElement("button");
btnAdd.textContent = "add";
bodyRef.prepend(btnAdd);

btnAdd.addEventListener("click", (e) => {
  console.log(e);
  bodyRef.classList.add("dark");
  localStorage.setItem("class", "dark");
});

let className = localStorage.getItem("class");
bodyRef.classList.add(className);

const btnRemove = document.createElement("button");
btnRemove.textContent = "remove";
btnAdd.after(btnRemove);

btnRemove.addEventListener("click", (e) => {
  console.log(e);
  bodyRef.classList.remove("dark");
  localStorage.removeItem("class");
});

const toggleBack = document.createElement("button");
toggleBack.textContent = "toggle";
btnRemove.after(toggleBack);

toggleBack.addEventListener("click", (e) => {
  console.log(e);
  bodyRef.classList.toggle("dark");
  console.log(localStorage.getItem("class"));
  //   if (localStorage.getItem("class")) {
  //     localStorage.removeItem("class");
  //   } else {
  //       localStorage.setItem("class", "dark")
  //     }

  localStorage.getItem("class")
    ? localStorage.removeItem("class")
    : localStorage.setItem("class", "dark");
});
