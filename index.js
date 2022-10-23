let DOMSelectors = {};

let inputArray = [];
let nameArray = [];
let conatiner = document.getElementById("cardContainer");
let cardNum = 0;
let blankFields = "false";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(form);
  //value = user input
  //name = input name (same as id)
  for (let [name, value] of data) {
    document.getElementById(name).value = "";
    inputArray.push(value);
    nameArray.push(name);
  }

  cardNum++;
  printCard();
});

function printCard() {
  let card = document.createElement("div");
  card.id = `card-${cardNum}`;
  card.setAttribute("class", "card created");

  let title = document.createElement("p");
  title.textContent = inputArray[0];
  title.id = `title-${cardNum}`;
  title.setAttribute("class", "created title");

  let dsc = document.createElement("p");
  dsc.textContent = inputArray[1];
  dsc.id = `dsc-${cardNum}`;
  dsc.setAttribute("class", "created dsc");

  let imageValue = "";

  if (inputArray[2] == "" || !inputArray[2].includes("http")) {
  } else {
    let imgLink = document.createElement("img");
    imgLink.src = inputArray[2];
    imgLink.alt = `image${cardNum}`;
    imgLink.id = "img";
    imgLink.setAttribute("class", "created img");
    imageValue = imgLink;
  }

  conatiner.append(card);
  card.append(title, imageValue, dsc);
  inputArray = [];
  nameArray = [];
}


function refresh() {
  document.getElementById("cardContainer").innerHTML="";
}

function resetRecent () {
  document.getElementById(`card-${cardNum}`).remove();
  cardNum -= 1;
  console.log(cardNum);
}