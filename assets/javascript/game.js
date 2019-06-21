$(document).ready(function () {

    //Click or Tap to show/hide instructions
    $(".show").click(function () {
        $(".menu").toggle("slide");
    });
    
    //================================================================
    var scoreNum = $("#totalScoreNum");
    var score = 0;
    var wins = 0;
    var losses = 0;
    var targetScore = 0;
    var crystals = $(".imageButton");
    var tt = $("#titleText");
    //================================================================

    function resetGame() {

        //Generate target score
        targetScore = Math.floor(Math.random() * 102 + 19);
        $("#targetNum").html("Target: " + targetScore);
        console.log(targetScore);

        //Update title
        tt.text("CrystalsCollector!");

        //Reset score
        score = 0;
        scoreNum.show();
        scoreNum.html(score);

        //Assign new crystal values
        for (var i = 0; i < crystals.length; i++) {

            //gen a random num between one and 12
            var randomNum = Math.floor(Math.random() * 12 + 1);

            $(crystals[i]).data("crystalValue", randomNum);
        }
    }
    //================================================================


    crystals.on('click', function () {
        score += $(this).data("crystalValue");
        scoreNum.html(score);
        console.log($(this).data("crystalValue"));
        console.log(score);
        console.log(targetScore);
        
        //check if score has exceeded/met target
        if (score > targetScore) {
            tt.html("YOU LOSE!")
            losses++;
            $("#losses").html(losses);
            scoreNum.hide();
            setTimeout(resetGame, 3000);
        } else if (score == targetScore) {
            tt.html("WINNER!")
            wins++;
            $("#wins").html(wins);
            scoreNum.hide();
            setTimeout(resetGame, 3000);
        }
    });
    //================================================================

    resetGame();
});