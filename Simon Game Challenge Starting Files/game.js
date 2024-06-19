
let start = true;
$(document).keydown(function() {
  if (start) {
    $("h1").text("Level 1");
    nextSequence();
    setupGameLevel();
    
    $("#red").click(randomChosenColour);
    $("#blue").click(randomChosenColour);
    $("#green").click(randomChosenColour);
    $("#yellow").click(randomChosenColour);


    start = false
  }
});



const buttonColour = ["red", "blue", "green", "yellow"];
let gamePattern = [];

// Function to generate next sequence color

function nextSequence () {
  randomNumbers = Math.floor(Math.random() * 4);
  let randomColour = buttonColour[randomNumbers];
  gamePattern.push(randomColour);
  playSound(randomColour); 
  fadeEffect($("#" + randomColour));
  
}

let gameLevel = 2;

// Function to set up game level and click events

function setupGameLevel() {
  $(document).off("click");
  $(document).click(function() {
    if (!checkClickPattern) {
      $("h1").text("game over");
      playSound("wrong");
  }
    else {
      setTimeout(() => {
        let character = "Level ";
        $("h1").text(character + gameLevel);
        gameLevel++;
        nextSequence();
      }, 1000);
  
      // Optionally, you might want to add a function call to reset the game here
      
    }

  })
}

let userClickedPattern = [];

// Function to handle button click and user input

function randomChosenColour() {
  let button = $(this);
  let userChosenColour = button.attr("id");
  userClickedPattern.push(userChosenColour);
  fadeEffect(button);
  playSound(userChosenColour);
}

function gameSequence(gamePattern, userClickedPattern) {
  for (let i = 0; i < gamePattern.length; i++) {
    if (gamePattern[i] !== userClickedPattern[i]) {
      return false; // If any element does not match, return false
    }
  }
  return true; // If all elements match, return true
}

function checkClickPattern () {
  if (gameSequence(gamePattern, userClickedPattern)) {
    if (gamePattern.length === userClickedPattern.length) {
      return true;
    }

    else {
      return false;
    }
   }   
 
}



function fadeEffect(button) {
  button.animate({ opacity: 0 }, 20).animate({ opacity: 1 }, 100);

}


function playSound(name) {

  switch (name) {
    case "blue":
      let blueSound = new Audio("./sounds/blue.mp3");
      blueSound.play();
    break;

    case "green":
      let greenSound = new Audio("./sounds/green.mp3");
      greenSound.play();
    break;

    case "red":
      let redSound = new Audio("./sounds/red.mp3");
      redSound.play();
    break;

    case "yellow":
      let yellowSound = new Audio("./sounds/yellow.mp3");
      yellowSound.play();
    break;

    default:
      let wrongSound = new Audio("./sounds/wrong.mp3");
      wrongSound.play();
    break;


  }

}


