// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

// function Header(date, heading, temp) {
const panel = document.createElement("div");

const date = document.createElement("span");
const heading = document.createElement("h1");
const temp = document.createElement("span");

panel.append(date);
panel.append(heading);
panel.append(temp);

panel.classList.add("header");
heading.classList.add("h1");
date.classList.add("date");
temp.classList.add("temp");

date.textContent = "January 17, 2020";
heading.textContent = "Lambda Times";
temp.textContent = "44 F";

// return panel;
// }

const head = document.querySelector(".header-container");

head.appendChild(panel);
