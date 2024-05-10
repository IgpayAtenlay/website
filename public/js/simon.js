var colors = ["green", "red", "yellow", "blue"];
var colorAudio = [
    new Audio("../assets/sounds/pop-very-low.mp3"), 
    new Audio("../assets/sounds/pop-low.mp3"),
    new Audio("../assets/sounds/pop-high.mp3"),
    new Audio("../assets/sounds/pop-very-high.mp3")
]
var gamePattern = [];
var userPattern = [];
var level = 0;
var inputNeeded = false;
var greenAudio = new Audio("../assets/sounds/pop-very-low.mp3");

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
    var i = 0;
    var interval = setInterval(function() {
        animatePress(gamePattern[i]);
        i++;
        if(i === json.objects.length) clearInterval(interval);
    }, 1000);
    inputNeeded = true;
}

function animatePress(color) {
    switch(color) {
        case "green":
            colorAudio[0].play();
            break;
        case "yellow":
            colorAudio[1].play();
            break;
        case "red":
            colorAudio[2].play();
            break;
        case "blue":
            colorAudio[3].play();
            break;
    }
    $("#" + color).fadeOut(100).fadeIn(100);
}

$("button").click(function() {
    if (level === 0) {
        startGame();
    } else if (inputNeeded) {
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
    $("h1").text("You Lost. Click any button to Restart");
}