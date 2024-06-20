// const buttonColour = ["red", "blue", "green", "yellow"];
// let gamePattern = [];
// let start = true;
// let gameLevel = 1;
// let userClickedPattern = [];

// $(document).keydown(function() {
//   if (start) {
//     headerOutput()
//     nextSequence();
//     clickColor();
//     start = false;
//   }
// });


// function clickColor() {
//   $("#red").click(randomChosenColour);
//   $("#blue").click(randomChosenColour);
//   $("#green").click(randomChosenColour);
//   $("#yellow").click(randomChosenColour);

//   }

//   // Function to update the header of the game
//   function headerOutput () {
//     $("h1").text("Level " + gameLevel);
//   }

// // Function to generate next sequence color
// function nextSequence () {
//   randomNumbers = Math.floor(Math.random() * 4);
//   let randomColour = buttonColour[randomNumbers];
//   gamePattern.push(randomColour);
//   playSound(randomColour); 
//   fadeEffect($("#" + randomColour));
//   userClickedPattern = [] //reset user pattern for new sequence 
// }


// // Function to handle button click and user input
// function randomChosenColour() {
//   let button = $(this);
//   let userChosenColour = button.attr("id");
//   userClickedPattern.push(userChosenColour);
//   fadeEffect(button);
//   playSound(userChosenColour);

//   if (!checkClickPattern()) {
//     $("h1").text("Game Over, Press any key to Start Again");
//     playSound("wrong");
//     startOver();
//   }

//   else if (gamePattern.length === userClickedPattern.length) {
//     setTimeout(function() {
//       gameLevel++;
//       headerOutput();
//       nextSequence();
//     }, 1000);
//   }
// }

// // Function to check game pattern and user pattern
// function checkClickPattern() {
//   for (let i = 0; i < userClickedPattern.length; i++) {
//     if (gamePattern.length === userClickedPattern.length) {
//       return false;
//     }
//   }
//   return true;
// }



// function fadeEffect(button) {
//   button.animate({ opacity: 0 }, 20).animate({ opacity: 1 }, 100);

// }


// function playSound(name) {

//   switch (name) {
//     case "blue":
//       let blueSound = new Audio("./sounds/blue.mp3");
//       blueSound.play();
//     break;

//     case "green":
//       let greenSound = new Audio("./sounds/green.mp3");
//       greenSound.play();
//     break;

//     case "red":
//       let redSound = new Audio("./sounds/red.mp3");
//       redSound.play();
//     break;

//     case "yellow":
//       let yellowSound = new Audio("./sounds/yellow.mp3");
//       yellowSound.play();
//     break;

//     default:
//       let wrongSound = new Audio("./sounds/wrong.mp3");
//       wrongSound.play();
//     break;


//   }

// }

// function startOver() {
//   gamePattern = [];
//   userClickedPattern = [];
//   gameLevel = 1;
//   start = true;
// }

const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let start = false;  
let gameLevel = 1;  

$(document).keydown(function() {
  if (!start) {  // Only start the game if start is false
    start = true; // Set start to true to prevent restarting
    headerOutput();
    nextSequence();
    clickColor();
  }
});

function clickColor() {
  $("#red").on("click", randomChosenColour);
  $("#blue").on("click", randomChosenColour);
  $("#green").on("click", randomChosenColour);
  $("#yellow").on("click", randomChosenColour);
}

function unbindClickColor() {
  $("#red").off("click", randomChosenColour);
  $("#blue").off("click", randomChosenColour);
  $("#green").off("click", randomChosenColour);
  $("#yellow").off("click", randomChosenColour);
}

// Function to update the header of the game
function headerOutput() {
  $("h1").text("Level " + gameLevel);
}

// Function to generate next sequence color
function nextSequence() {
  let randomNumbers = Math.floor(Math.random() * 4);
  let randomColour = buttonColours[randomNumbers];
  gamePattern.push(randomColour);
  playSound(randomColour);
  fadeEffect($("#" + randomColour));
  userClickedPattern = []; // Reset user pattern for new sequence 
}

// Function to handle button click and user input
function randomChosenColour() {
  let button = $(this);
  let userChosenColour = button.attr("id");
  userClickedPattern.push(userChosenColour);
  fadeEffect(button);
  playSound(userChosenColour);

  if (!checkClickPattern()) {
    $("h1").text("Game Over, Press any key to Start Again");
    playSound("wrong");
    unbindClickColor(); //reset click binding
    startOver();
  } else if (gamePattern.length === userClickedPattern.length) {
    setTimeout(function() {
      gameLevel++;
      headerOutput();
      nextSequence();
    }, 1000);
  }
}

// Function to check user input pattern against game pattern
function checkClickPattern() {
  for (let i = 0; i < userClickedPattern.length; i++) {
    if (userClickedPattern[i] !== gamePattern[i]) {
      return false;
    }
  }
  return true; 
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

function startOver() {
  gamePattern = [];
  userClickedPattern = [];
  gameLevel = 1; // Reset level to 0
  start = false; // Set start to false to allow game restart on key press
}

