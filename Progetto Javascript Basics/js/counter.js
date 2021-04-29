/*counter function*/
let add = document.getElementById("increment");
let remove = document.getElementById("decrement");
let num = document.getElementById("number");
let int = 0;

add.addEventListener("click", function () {
  int += 1;
  num.innerHTML = int;
});

remove.addEventListener("click", function () {
  int -= 1;
  num.innerHTML = int;
});

/*toggle function*/
let body = document.getElementById("body");
let title = document.getElementById("title");
let counter = document.getElementById("counter");
let btn = document.getElementById("btn");
let toggle = document.getElementById("toggle");

toggle.addEventListener("click", (e) => {
  body.classList.toggle("active");
  title.classList.toggle("active");
  btn.classList.toggle("active");
  counter.classList.toggle("active");
  num.classList.toggle("active");
  add.classList.toggle("active");
  remove.classList.toggle("active");
});
