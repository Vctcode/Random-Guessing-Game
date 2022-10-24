var score = 0;
var count = 2;
var loopStop = "";
var correctGuess = true;
var userName;

if (correctGuess == true) {
  function guesser() {
    userName = prompt("What is your name?");
    console.log(
      "Welcome, " +
      userName +
      "! This is a Random Number Guess game. Hit enter to continue"
    );

    do {
      var randomNum = Math.floor(Math.random() * count) + 1;
      var inputNum = prompt(`Input a number between 1 and ${count}`);

      if (randomNum == inputNum && loopStop != "N") {
        score += 1;
        count += 1;
        console.log(`Correct. Your have +1 point, score: ${score}`);
      } else if (randomNum != inputNum && loopStop != "N") {
        console.log(`You are wrong, try again. Your current score is: ${score} \n Current level: ${level = score + 1}.`);
        loopStop = prompt("Enter any key to continue or tpye N to stop");
      } else if (loopStop === "N") {
        correctGuess = false;
        return
      }
    }
    while (correctGuess = true)


  }

  guesser(count);
}
console.log(`Oops, you quit! \nYour are on level ${level} with ${score} points. Bye, ${userName}`)