const title = document.querySelector("#balance");

const minus1e = document.querySelector("#minus1e");
const minus10e = document.querySelector("#minus10e");

const zero = document.querySelector("#zero");

const plus1e = document.querySelector("#plus1e");
const plus10e = document.querySelector("#plus10e");

const bulbOff = document.querySelector("#bulb-off");
const bulbOn = document.querySelector("#bulb-on");

let balance = JSON.parse(localStorage.getItem("balance")) ?? 10;
bulbOn.style.display = localStorage.getItem("bulbOn") ?? "block";
bulbOff.style.display = localStorage.getItem("bulbOff") ?? "none";
title.style.color = localStorage.getItem("titleColor") ?? "#0fb245";
title.textContent = `${balance}€`;

minus1e.addEventListener("click", () => {
  balance = balance - 1;
  balanceTracker();
});

minus10e.addEventListener("click", () => {
  balance = balance - 10;
  balanceTracker();
});

zero.addEventListener("click", () => {
  balance = 0;
  balanceTracker();
});

plus1e.addEventListener("click", () => {
  balance = balance + 1;
  balanceTracker();
});

plus10e.addEventListener("click", () => {
  balance = balance + 10;
  balanceTracker();
});

function balanceTracker() {
  title.textContent = `${balance}€`;
  checkBulb(balance);
}

function checkBulb(balance) {
  if (balance < 0) {
    setBulbOff();
    title.style.color = "#df1616";
  } else if (balance === 0) {
    title.style.color = "#999";
    setBulbOff();
  } else {
    setBulbOn();
    title.style.color = "#0fb245";
  }

  localStorage.setItem("balance", balance);
  localStorage.setItem("bulbOn", bulbOn.style.display);
  localStorage.setItem("bulbOff", bulbOff.style.display);
  localStorage.setItem("titleColor", title.style.color);
}

function setBulbOn() {
  bulbOn.style.display = "block";
  bulbOff.style.display = "none";
}

function setBulbOff() {
  bulbOff.style.display = "block";
  bulbOn.style.display = "none";
}
