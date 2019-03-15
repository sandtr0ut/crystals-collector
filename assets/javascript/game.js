$(document).ready(function() {

var score = 0;
var wins = 0;
var losses = 0;


//generate a random number between 19 and 120

function targetScore() {
     return Math.floor(Math.random() * 102 + 19);
} 

console.log(targetScore());

$("#imageButton").each(function() {
     console.log($(this.name));
   });




//select all of the crystals
var crystals = $(".imageButton");

//loop through the resulting array
for (var i = 0; i < crystals.length; i++) {
     
     //gen a random num 1-12 for each iteration
     var randomNum = Math.floor(Math.random() * 12 + 1);
     //create local variable for the crystal at location [i]
     // var currentElement = crystals[i];

     //assign the random numbers we just generated to the respective
     //image buttons
     crystals.attr("crystalValue",randomNum);
     
}


});