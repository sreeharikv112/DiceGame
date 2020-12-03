  function rollButtonClick() {

    var random1 = Math.floor(Math.random() * 6) + 1;

    var random2 = Math.floor(Math.random() * 6) + 1;

    //access the image elements
    var imgFirstDice = $("#img1");
    imgFirstDice.attr('src', "images/dice" + random1 + ".png");

    var imgSecondDice = $("#img2");
    imgSecondDice.attr('src', "images/dice" + random2 + ".png");

    //set default text and elements post rolling dice.
    $("h1").text("Player 2 Wins🏆");

    //modify the elements as per criteria
    if (random1 > random2) {
      $("h1").text("🏆Player 1 Wins ");
    } else if (random1 == random2) {
      $("h1").text("Its a draw");
    }

  }
