var Dice1 = Math.floor(Math.random() * 6)+1;
var Dice2 = Math.floor(Math.random() * 6)+1;

var images1 = "images/dice" + Dice1 + ".png";
var images2 = "images/dice" + Dice2 + ".png";

document.querySelector(".dice .img1").setAttribute("src" , images1);
document.querySelector(".dice .img2").setAttribute("src" , images2);

if (Dice1 == Dice2){
  document.querySelector(".container h1").textContent = "DRAW";
} else if (Dice1 < Dice2){
  document.querySelector(".container h1").textContent = "Player 2 Wins🚩"
} else {
  document.querySelector(".container h1").textContent = "🚩Player 1 Wins"
}
