function randomNumbers() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

let randomNumber1 = randomNumbers();
let randomNumber2 = randomNumbers()

document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Win";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 win";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}

