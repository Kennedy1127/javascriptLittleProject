'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

let totalScore = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const init = function () {
  totalScore = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  // console.log(player0);
  player1.classList.toggle('player--active');
  // console.log(player1);
};
//Rolling dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    //generating a radom dice roll
    const diceNum = Math.trunc(Math.random() * 6) + 1;

    //display dice
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNum}.png`;
    //console.log(diceNum);

    //check if dice = 1
    if (diceNum !== 1) {
      //add dice to current score
      currentScore += diceNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //dice = 1 ,switch player
      switchPlayer();
      //     document.getElementById(`current--${activePlayer}`).textContent = 0;
      //     activePlayer = activePlayer === 0 ? 1 : 0;
      //     currentScore = 0;
      //     player0.classList.toggle('player--active');
      //    // console.log(player0);
      //     player1.classList.toggle('player--active');
      //    // console.log(player1);
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //add current score to active player's score

    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];
    //chick if player's score is >=100
    if (totalScore[activePlayer] >= 100) {
      //finish game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      dice.classList.add('hidden');
    }

    //switch to the other player
    else switchPlayer();
  }
});

btnNew.addEventListener('click', init);
