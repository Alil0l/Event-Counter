let animateI1 = document.querySelector("a:nth-child(1) i");
let animateI2 = document.querySelector("a:nth-child(2) i");
let animateI3 = document.querySelector("a:nth-child(3) i");
let animateI4 = document.querySelector("a:nth-child(4) i");

setTimeout(() => {
  animateI1.classList.add("fa-beat");
}, 200);
setTimeout(() => {
  animateI2.classList.add("fa-beat");
}, 300);
setTimeout(() => {
  animateI3.classList.add("fa-beat");
}, 400);
setTimeout(() => {
  animateI4.classList.add("fa-beat");
}, 500);
