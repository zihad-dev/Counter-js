let counter = document.querySelector(".counter");
let increase = document.querySelector(".increase");
let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");
let counterNumber = parseInt(counter.innerHTML);
let counterStart = 0;
counter.innerHTML = 0;
let interval;

function counterUp() {
  clearInterval(interval);
  interval = setInterval(() => {
    counterStart++;
    counter.innerHTML = counterStart;
    if (counterStart === counterNumber) {
      clearInterval(interval);
      counterStart = 0;
    }
  }, 500);
}
function counterDown() {
  clearInterval(interval);
  counterStart = counter.innerHTML;
  interval = setInterval(() => {
    counterStart--;
    counter.innerHTML = counterStart;
    if (counterStart <= 0) {
      clearInterval(interval);
      counter.innerHTML = 0;
    }
  }, 500);
}
function resetNumber() {
  clearInterval(interval);
  counterStart = 0;
  counter.innerHTML = 0;
}

increase.addEventListener("click", function () {
  counterUp();
});
decrease.addEventListener("click", function () {
  counterDown();
});
reset.addEventListener("click", function () {
  resetNumber();
});

// increase.addEventListener("click", function () {
//   function counterJs() {
//     counterStart++;
//     counter.innerHTML = counterStart;
//     if (counterStart == counterNumber) {
//       clearInterval(stop);
//     }
//   }
//   let stop = setInterval(() => {
//     counterJs();
//   }, 500);
// });
// reset.addEventListener("click", function () {
//   counter.innerHTML=0

// });
