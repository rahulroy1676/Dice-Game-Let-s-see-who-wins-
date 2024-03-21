var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Random Number generator between 1 - 6

var randomDiceImageLink = "./images/dice"+ randomNumber1 + ".png";

var setImage1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImageLink);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImageLink2 = "./images/dice" + randomNumber2 + ".png";

var setImage2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageLink2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Won!!";
}else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Won!!";
}else{
    document.querySelector("h1").innerHTML = "It is a Draw!"
}