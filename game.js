

var gamePattern = [];
var userClickedPattern =[];
var isGameStarted = false;
var level = 0;
var buttonColours = ["red", "blue", "green", "yellow"];


function nextSequence(){
    userClickedPattern = [];
    level++;
    $("h1").text("Level " + level);
    randomNo = Math.floor((Math.random()  * 4) );
    var randomChosenColour = buttonColours[randomNo];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);


}

function checkAns(currenlevel){
    if(gamePattern[currenlevel] == userClickedPattern[currenlevel] ){
        console.log("s");
        if (userClickedPattern.length === gamePattern.length){

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
    } else {
        $("h1").text("Game over, Press A Key to ReStart ");
        level = 0;
        isGameStarted = false;
        playSound("wrong");
        console.log("f");
        $("body").addClass("game-over");
        setTimeout(function () { $("body").removeClass("game-over") }
            ,200);
    }
   


}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatPress(currentColor){
    $("." + currentColor).addClass("pressed");
    setTimeout(function(){ $("." + currentColor).removeClass("pressed"); }, 100);

}

    $(document).keypress(function () { 

        if(!isGameStarted){
            $("#level-title").text("Level " + level);
        nextSequence();
        isGameStarted = true;
        
    }

    });

$(".btn").click( function() { 
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatPress(userChosenColour);
    checkAns(userClickedPattern.length-1);
    console.log(userClickedPattern);

});