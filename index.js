var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImages = "dice" + randomNumber1 + ".png" //dice1 - dice6

var randomImagesSource = "images/" + randomDiceImages; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImagesSource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImagesSource2 = "images/dice" + randomNumber2 + ".png"

document.querySelectorAll("img")[1].setAttribute("src", randomImagesSource2);



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "😁 Player1 Wins!!!";
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "😁 PLayer2 Wins!!!";
}

else {
    document.querySelector("h1").innerHTML = "😑 Draw";
}