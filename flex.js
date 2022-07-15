// add Function to first square
let item = document.querySelector(".square1");
item.addEventListener("click", function () {
  item.style.backgroundColor = "red";
  item.style.color = "yellow";
  item.style.textShadow = "2px 2px 2px rgb(75, 75, 233)";
});
// finish function to first square

// add function to second square

let item2 = document.querySelector(".square2");
item2.addEventListener("click", function () {
  item2.style.background = "yellow";
  item2.style.color = "red";
  item2.style.textShadow = "1px 2px 3px rgb(75, 75, 233)";
  item2.style.borderRadius = "40%";
});
// finish function to second square

// adding class
let lastItem = document.querySelector(".square5");
lastItem.addEventListener("click", function change() {
  lastItem.classList.add("add-class");
});

// removing class

var thirdContainer = document.querySelector(".third-container");

let square6 = document.querySelector(".square6");
square6.addEventListener("click", function add() {
  thirdContainer.classList.add("add-class");
});

// try

let div = document.querySelector(".try");
div.addEventListener("click", function () {
  div.remove("try");
});
//  end of try
