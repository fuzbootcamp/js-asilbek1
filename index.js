let links = document.querySelector(".center");
function toggle() {
  links.classList.toggle("active");
}

let img = document.querySelector(".h-main img");

function f1() {
  img.style.filter = "blur(3px)";
}
function f2() {
  img.style.filter = "contrast(50%)";
}
function f3() {
  img.style.filter = "grayscale(30%)";
}
function f4() {
  img.style.filter = "opacity(15%)";
}
function f5() {
  img.style.filter = "sepia(30)";
}
function b1() {
  img.style.border = "10px solid dodgerblue";
}
function b2() {
  img.style.border = "10px solid red";
}
function b3() {
  img.style.border = "10px solid blue";
}
function b4() {
  img.style.border = "10px solid yellow";
}
