var colors = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userPattern = [];
var level = 0;
var inputNeeded = false;

$(document).keydown(function(event) {
    if (event.key === "a" && level === 0) {
        startGame();
    }
})

function startGame() {
    level = 0;
    gamePattern = [];
    setTimeout(function() {
        nextSequence();
    }, 200);
}

function nextSequence() {
    inputNeeded = false;
    level++;
    $("h1").text("Level " + level)
    var nextColor = colors[Math.floor(Math.random() * 4)];
    gamePattern.push(nextColor);
    userPattern = [];
    animatePress(nextColor);
    inputNeeded = true;
}

function animatePress(color) {
    $("#" + color).fadeOut(100).fadeIn(100);
    new Audio("../assets/sounds/click.mp3").play();
}

$("button").click(function() {
    if (inputNeeded) {
        var color = this.id;
        animatePress(color);
        userPattern.push(color);
        if (userPattern.toString() === gamePattern.toString()) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        } else {
            for (var i = 0; i < userPattern.length; i++) {
                if (userPattern[i] != gamePattern[i]) {
                    gameOver();
                }
            }
        }
    }
});

function gameOver() {
    inputNeeded = false;
    level = 0;
    new Audio("../assets/sounds/error.mp3").play();
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200);
    $("h1").text("You Lost. Press 'A' to Restart");
}