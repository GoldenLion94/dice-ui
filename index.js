let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImageSource1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

let radondomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = "images/dice" + radondomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > radondomNumber2) {
  document.querySelector("h1").innerText = "Player 1 Wins!";
} else if (radondomNumber2 > randomNumber1) {
  document.querySelector("h1").innerText = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerText = "It's a Draw";
}
