var randomNumber1 = Math.ceil(Math.random() * 6);
var randomImgSource1 = `images/dice${randomNumber1}.png`;
document.querySelectorAll("img")[0].setAttribute('src', randomImgSource1);

var randomNumber2 = Math.ceil(Math.random() * 6);
var randomImgSource2 = `images/dice${randomNumber2}.png`;
document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);


if(randomNumber1 > randomNumber2) {
    document.querySelectorAll('h1')[0].innerHTML = "Player one wins";

}else if (randomNumber2 > randomNumber1) {
    document.querySelectorAll('h1')[0].innerHTML = "Player two wins";

}else if (randomNumber1 === randomNumber2) {
    document.querySelectorAll("h1")[0].innerHTML = "Draw";
}



