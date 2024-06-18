const buttonColour = ["red", "blue", "green", "yellow"];

$(document).keydown(function() {
  let character = "Level 1";
  $("h1").text(character);
  $("#red").click(randomChosenColour)
  $("#blue").click(randomChosenColour)
  $("#green").click(randomChosenColour)
  $("#yellow").click(randomChosenColour)
  setupGameLevel();
}); 


function nextSequence () {
  randomNumbers = Math.floor(Math.random() * 4);
  return randomNumbers;
}

let gameLevel = 2;
function setupGameLevel() {
  $(document).off("click");
  $(document).click(function() {
    let character = "Level ";
    $("h1").text(character + gameLevel);
    gameLevel++;
  })
}

function randomChosenColour () {
  $(this).fadeOut(100).fadeIn(100);
  $(this).click(function() {
    let userChosenColour = [];
    if buttonColour.includes("red")
  })
}


