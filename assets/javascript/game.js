$(document).ready(function () {

  var scoreNum = $("#totalScoreNum");
  var score = 0;
  var wins = 0;
  var losses = 0;



  //create a function that will reset the target score when called
  function targetScore() {
    //generate a random number between 19 and 120
    var num = Math.floor(Math.random() * 102 + 19);
    $("#targetNum").html(num);
    console.log(num);
  }
  

  //select all of the crystal values
  var crystals = $(".imageButton");

  //create a function that will reset/reassign the new attribute crystalValues when called
  // function resetGame() {
    //and generate a new target score
    targetScore();

    //loop through the resulting array
    for (var i = 0; i < crystals.length; i++) {

      //gen a random num 1-12 for each iteration
      var randomNum = Math.floor(Math.random() * 12 + 1);
      //create local variable for the crystal at current location [i]
       var currentElement = crystals[i];

      //assign the random numbers we just generated to the respective
      //image buttons
      crystals.data("crystalValue", randomNum);
      
      console.log(crystals.data("crystalValue"));
    }
  // }
  
  
  //handle clicks on each of the buttons
  crystals.on('click', function() {
    score += $(this).data("crystalValue");
    scoreNum.html(score);
    console.log($(this).data("crystalValue"));
    
    //check if score has exceeded target (loss)
    if (score > targetScore) {
      losses++;
      $("#losses").html(losses);
      // resetGame();
    }
    else if (score == targetScore) {
      wins++;
      $("#wins").html(wins);
      // resetGame();
    }
    
  })

});
