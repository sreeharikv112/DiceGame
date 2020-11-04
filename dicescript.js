function rollButtonClick() {

  //create two randoms for 2 dices
  var random1 = Math.floor(Math.random() * 6) + 1;

  var random2 = Math.floor(Math.random() * 6) + 1;

  //access the image elements
  var imgFirstDice = document.getElementById("img1");
  imgFirstDice.setAttribute('src', "images/dice" + random1 + ".png");

  var imgSecondDice = document.getElementById("img2");
  imgSecondDice.setAttribute('src', "images/dice" + random2 + ".png");

  //set default text and elements post rolling dice.
  document.querySelector("h1").textContent = "Player 2 Wins🏆"

  //modify the elements as per criteria
  if (random1 > random2) {
    document.querySelector("h1").textContent = "🏆Player 1 Wins "
  } else if (random1 == random2) {
    document.querySelector("h1").textContent = "Its a draw🎭";
  }

}
