

var RandomNumber1 = Math.floor(Math.random() * 6) + 1;  // 1-6
var RandomDiceImage1 = "dice" + RandomNumber1 + ".png";  // dice1.png - dice6.png
var RandomImageSource1 = "images/" + RandomDiceImage1;  // images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", RandomImageSource1);

var RandomNumber2 = Math.floor(Math.random() * 6) + 1;
var RandomDiceImage2 = "dice" + RandomNumber2 + ".png";
var RandomImageSource2 = "images/" + RandomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", RandomImageSource2);

if (RandomNumber1>RandomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (RandomNumber2>RandomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "It's a Draw :(";
}