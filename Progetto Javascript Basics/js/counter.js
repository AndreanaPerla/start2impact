/*create counter*/
let add = document.createElement("button");
let add_text = document.createTextNode("+");
add.appendChild(add_text);
document.getElementById("counter").appendChild(add);
add.classList.add("increment");

let num = document.createElement("p");
let p_text = document.createTextNode("0");
num.appendChild(p_text);
document.getElementById("counter").appendChild(num);
num.classList.add("number");

let remove = document.createElement("button");
let remove_text = document.createTextNode("-");
remove.appendChild(remove_text);
document.getElementById("counter").appendChild(remove);
remove.classList.add("decrement");

/*counter function*/
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
