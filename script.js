let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function () {
  const input = inputEl.value;
  myLeads.push(input);
  console.log(myLeads);
});

// let box = document.getElementById("box");

// box.addEventListener("click", function () {
//   console.log("I want to open the box!");
// });
