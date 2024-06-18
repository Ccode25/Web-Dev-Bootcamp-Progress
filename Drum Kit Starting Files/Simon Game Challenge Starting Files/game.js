

$(document).keydown(function() {
  let character = "Level 1";
  $("h1").text(character);
  $("#red").click(randomChosenColour)
  $("#blue").click(randomChosenColour)
  $("#green").click(randomChosenColour)
  $("#yellow").click(randomChosenColour)
  setupGameLevel();
  nextSequence();


}); 




const buttonColour = ["red", "blue", "green", "yellow"];
let gamePattern = [];

// Function to generate next sequence color

function nextSequence () {
  let button = $(this);
  randomNumbers = Math.floor(Math.random() * 4);
  let randomColour = buttonColour[randomNumbers];
  gamePattern.push(randomColour);
  playSound(randomColour); 
  button.animate({ opacity: 0 }, 20).animate({ opacity: 1 }, 100);
}

let gameLevel = 2;

// Function to set up game level and click events

function setupGameLevel() {
  $(document).off("click");
  $(document).click(function() {
    let character = "Level ";
    $("h1").text(character + gameLevel);
    gameLevel++;
  })
}

let userClickedPattern = [];

// Function to handle button click and user input

function randomChosenColour () {
  let button = $(this);
  
  let userChosenColour = button.attr("id");
  userClickedPattern.push(userChosenColour);
  $(userChosenColour).click(fadeEffect);
  fadeEffect(button);
  playSound(userChosenColour);

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

