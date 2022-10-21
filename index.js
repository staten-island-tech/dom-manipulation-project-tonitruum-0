let DOMSelectors = {};

let inputArray = [];
let nameArray = [];
let conatiner = document.getElementById("container");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(form);
  //name = user input
  // value = input name (same as id)
  for (let [name, value] of data) {
    document.getElementById(name).value = "";
    inputArray.push(value);
    nameArray.push(name);
  }
  printCard();
});

function printCard() {
  let title = document.createElement("p");
  title.textContent = inputArray[0];
  title.id = "title";
  title.setAttribute("class", "created");

  let dsc = document.createElement("p");
  dsc.textContent = inputArray[1];
  dsc.id = "dsc";
  dsc.setAttribute("class", "created");

  let imgLink = document.createElement("img");
  imgLink.src = inputArray[2];
  imgLink.id = "img";
  imgLink.setAttribute("class", "created");

  conatiner.appendChild(title);
  conatiner.appendChild(dsc);
  conatiner.appendChild(imgLink);
}

