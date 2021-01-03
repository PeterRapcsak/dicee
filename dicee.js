function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))+1;
}
function roll() {

var p1 = getRandomInt(6)
var p2 = getRandomInt(6)

if(p1 == p2){document.querySelector("h1").innerHTML = "Draw"

} else if(p1 > p2){
  document.querySelector("h1").innerHTML = "🏴Player 1 wins"
} else if(p2 > p1){
  document.querySelector("h1").innerHTML = "Player 2 wins🏴"
}
document.querySelector(".img1").setAttribute("src", "images/dice" + p1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + p2 + ".png");
}
