var counterElement = document.getElementById("counter");
var incrementBtn = document.getElementById("incrementBtn");
var decrementBtn = document.getElementById("decrementBtn");
var resetBtn = document.getElementById("restBtn");

function increment() {
  let counterValue = parseInt(counterElement.textContent);
  counterElement.textContent = counterValue + 1;
}

function decrement() {
  let counterValue = parseInt(counterElement.textContent);
  counterElement.textContent = counterValue - 1;
}

function reset() {
  counterElement.textContent = 0;
}
