function rollButtonClick() {

  var random1 = Math.floor(Math.random() * 6) + 1;

  var random2 = Math.floor(Math.random() * 6) + 1;

  console.log(random1 + " ||  " + random2);

  //access the image elements
  var imgFirstDice = document.querySelector(".img1");
  imgFirstDice.setAttribute('src',"images/dice" + random1 + ".png");
  //OR
  //imgFirstDice.src = "images/dice" + random1 + ".png";

  var imgSecondDice = document.querySelector(".img2");
  imgSecondDice.setAttribute('src',"images/dice" + random2 + ".png");
  //OR
  //imgSecondDice.src = "images/dice" + random2 + ".png";

  //access flags
  //var flag1 = document.querySelector("#firstFlag");
  //var flag2 = document.querySelector("#secondFlag");

  //set default text and elements post rolling dice.
  document.querySelector("h1").textContent = "Player 2 Wins🏆"
  //flag1.classList.add("hideElement");
  //flag2.classList.remove("hideElement");

  //modify the elements as per criteria
  if(random1 > random2){
    document.querySelector("h1").textContent =  "🏆Player 1 Wins "
    //flag2.classList.add("hideElement");
    //flag1.classList.remove("hideElement");
  }else if (random1 == random2) {
    document.querySelector("h1").textContent = "Its a draw";
    //flag2.classList.add("hideElement");
    //flag1.classList.add("hideElement");
  }

}
