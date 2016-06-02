var firstQuestion = ["Would you rather...","date an actor (or actress)","or date a musician?"];
var secondQuestionA = ["Do you prefer...","action movies","or sitcoms?"];
var secondQuestionB = ["Are you more of a...","pop fan","or rock fan?"];
var thirdQuestionAA = ["Do you like to watch...","kung fu movies","or superhero movies?"];
var thirdQuestionAB = ["Are you a fan of","classic sitcoms","or offbeat sitcoms?"];
var thirdQuestionBA = ["Do you listen to...","newer music","or older music?"];
var thirdQuestionBB = ["Are you more of a...","Hippy","HESHER"];
var qBank = [firstQuestion,secondQuestionA,secondQuestionB,thirdQuestionAA,thirdQuestionAB,thirdQuestionBA,thirdQuestionBB];

var datingPool = ["Person One","Person Two","Person Three","Person Four","Person Five","Six","Seven","Eight"];
var yourCelebDate;

$(document).ready(function() {
  $("#startquiz").click(function() {
    $(this).text(qBank[0][0]);
    $("#option1").text(qBank[0][1]);
    $("#option2").text(qBank[0][2]);

    $("#option1").click(function() {
      $("#question h1").text(qBank[1][0]);
      $("#option1").text(qBank[1][1]);
      $("#option2").text(qBank[1][2]);
      $("#option1").click(function() {
        $("#question h1").text(qBank[3][0]);
        $("#option1").text(qBank[3][1]);
        $("#option2").text(qBank[3][2]);
      });
      $("#option2").click(function() {
        $("#question h1").text(qBank[4][0]);
        $("#option1").text(qBank[4][1]);
        $("#option2").text(qBank[4][2]);
      });
    });
    $("#option2").click(function() {
      $("#question h1").text(qBank[2][0]);
      $("#option1").text(qBank[2][1]);
      $("#option2").text(qBank[2][2]);
      $("#option1").click(function() {
        $("#question h1").text(qBank[5][0]);
        $("#option1").text(qBank[5][1]);
        $("#option2").text(qBank[5][2]);
      });
      $("#option2").click(function() {
        $("#question h1").text(qBank[6][0]);
        $("#option1").text(qBank[6][1]);
        $("#option2").text(qBank[6][2]);
      });
    });
  });


});
