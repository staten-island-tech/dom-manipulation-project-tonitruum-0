let DOMSelectors = {};

let inputArray = [];
let nameArray = [];
let conatiner = document.getElementById("cardContainer");
let cardNum = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(form);
  //name = user input
  // value = input name (same as id)
  for (let [name, value] of data) {
    //document.getElementById(name).value = "";
    inputArray.push(value);
    nameArray.push(name);
  }
  cardNum++;
  printCard();
});

function printCard() {
  let card = document.createElement('div');
  card.id = `card-${cardNum}`;
  card.setAttribute("class", "card created");


  let title = document.createElement("p");
  title.textContent = inputArray[0];
  title.id = `title-${cardNum}`;
  title.setAttribute("class", "created title");
  console.log(cardNum);

  let dsc = document.createElement("p");
  dsc.textContent = inputArray[1];
  dsc.id = `dsc-${cardNum}`;
  dsc.setAttribute("class", "created dsc");

  let imgLink = document.createElement("img");
  imgLink.src = inputArray[2];
  imgLink.alt = `image${cardNum}`;
  imgLink.id = "img";
  imgLink.setAttribute("class", "created img");

  conatiner.append(card);
  card.append(title, dsc, imgLink);
  console.log("success");
}

