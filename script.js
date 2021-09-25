'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number😂';
// //console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
//document.querySelector('.number').textContent = secretNumber;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //no input
  if (!guess) {
    //document.querySelector('.message').textContent = 'No number.(*/ω＼*)';
    displayMessage('No number.(*/ω＼*)');
  }
  //win
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    //document.querySelector('.message').textContent = 'Correct Number.╰(*°▽°*)╯';
    displayMessage('Correct Number.╰(*°▽°*)╯');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? "Too high. (●''●)" : "Too low. (●''●)";
      displayMessage(
        guess > secretNumber ? "Too high. (●''●)" : "Too low. (●''●)"
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent =
      //     'You lose the game.>(❁´◡`❁)';
      displayMessage('You lose the game.>(❁´◡`❁)');
      document.querySelector('.score').textContent = 0;
    }
  }
  //high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = "Too high. (●''●)";
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent =
  //         'You lose the game.>(❁´◡`❁)';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  //   //low
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = "Too low. (●''●)";
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent =
  //         'You lose the game.>(❁´◡`❁)';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
