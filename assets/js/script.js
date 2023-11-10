let select = document.querySelector("#select");
let Inter = document.querySelector("#Inter");
let Lora = document.querySelector("#Lora");
let Mono = document.querySelector("#Mono");
let info1 = document.querySelector("#info1");
let info2 = document.querySelector("#info2");
let searchInput = document.querySelector("#searchInput");
let infop1 = document.querySelector("#infop1");3
let infop2 = document.querySelector("#infop2");
let infop3 = document.querySelector("#infop3");
let info5 =document.querySelector("#info5");
let info6 = document.querySelector("#info6");
let phone = document.querySelector("#phone")
///////////////////////////////////////////
function color(value) {
  document.body.style.backgroundColor = value;
  select.style.backgroundColor = "black";
  select.style.color = "white";
  Inter.style.color = "white";
  Lora.style.color = "white";
  Mono.style.color = "white";
  info1.style.color = "white";
  info2.style.color = "white";
  searchInput.style.backgroundColor = "#1F1F1F";
  infop1.style.color = "white";
  infop2.style.color = "white";
  infop3.style.color = "white";
  info5.style.color = "white"
  info6.style.color= "white"
  searchInput.style.color = "white"
}
//////////////////////////////////////////////
function fontFamily(value) {
  document.body.style.fontFamily = value;
}
/////////////////////////////////////////////
function getData(address) {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${address}`;

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      showUi(data[0]);
    });


    function showUi(data) {
      console.log(data);
      info1.textContent = data.word;
      phone.textContent = data.phonetic;
      info2.textContent = data.meanings.partOfSpeech;
    }
}
const input = document.querySelector("#searchInput");

input,
  addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
      getData(input.value);
    }
    console.log(event.key);
  });


