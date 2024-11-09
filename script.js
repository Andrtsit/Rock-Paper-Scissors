`use strict`;

const app = function () {
  // elements needed
  const playerScore = document.getElementById(`player-score`);
  const computerScore = document.getElementById(`computer-score`);

  const playerContainer = document.querySelector(`.human-participant`);
  const computerContainer = document.querySelector(`.computer-participant`);

  const btnRock = document.getElementById(`rock`);
  const btnScissors = document.getElementById(`scissors`);
  const btnPaper = document.getElementById(`paper`);
  const btnReset = document.querySelector(`.reset`);

  const computerAnswer = document.getElementById(`computer-answer`);
  const playerAnswer = document.getElementById(`player-answer`);

  // declarations

  let randomNumber;
  let score1 = 0;
  let score2 = 0;

  // functions declarations

  const disableAllBtns = function () {
    btnRock.disabled = true;
    btnScissors.disabled = true;
    btnPaper.disabled = true;
  };
  const enableAllBtns = function () {
    btnRock.disabled = false;
    btnScissors.disabled = false;
    btnPaper.disabled = false;
  };

  let scenario1 = function () {
    computerAnswer.src = `fist.svg`;
    computerAnswer.classList.remove(`hidden`);
    disableAllBtns();
    setTimeout(() => {
      enableAllBtns();
      playerAnswer.classList.add(`hidden`);
      computerAnswer.classList.add(`hidden`);
    }, 1000);
  };
  let scenario2 = function () {
    computerAnswer.src = `palm.svg`;
    computerAnswer.classList.remove(`hidden`);
    disableAllBtns();
    setTimeout(() => {
      enableAllBtns();
      playerAnswer.classList.add(`hidden`);
      computerAnswer.classList.add(`hidden`);
    }, 1000);
  };
  let scenario3 = function () {
    computerAnswer.src = `scissors.svg`;
    computerAnswer.classList.remove(`hidden`);
    disableAllBtns();
    setTimeout(() => {
      enableAllBtns();
      playerAnswer.classList.add(`hidden`);
      computerAnswer.classList.add(`hidden`);
    }, 1000);
  };

  const checkScore = function () {
    if (score1 >= 5) {
      playerScore.textContent = ` you win`;
      disableAllBtns();
      playerContainer.classList.add(`winner`);
      setTimeout(() => {
        enableAllBtns();
        playerContainer.classList.remove(`winner`);
        playerScore.textContent = `0`;
        computerScore.textContent = `0`;
        computerAnswer.classList.add(`hidden`);
        playerAnswer.classList.add(`hidden`);
        score1 = 0;
        score2 = 0;
      }, 2000);
    } else if (score2 >= 5) {
      computerScore.textContent = ` you win`;
      disableAllBtns();
      computerContainer.classList.add(`winner`);
      setTimeout(() => {
        enableAllBtns();
        computerContainer.classList.remove(`winner`);
        playerScore.textContent = `0`;
        computerScore.textContent = `0`;
        computerAnswer.classList.add(`hidden`);
        playerAnswer.classList.add(`hidden`);
        score1 = 0;
        score2 = 0;
      }, 2000);
    }
  };
  // EVENT LISTENERS
  btnRock.addEventListener(`click`, function () {
    playerAnswer.src = `fist.svg`;
    playerAnswer.classList.remove(`hidden`);
    randomNumber = Math.trunc(Math.random() * 3 + 1);
    if (randomNumber === 1) {
      scenario1();
    } else if (randomNumber === 2) {
      scenario2();
      score2++;
      computerScore.textContent = score2;
      checkScore();
    } else {
      scenario3();
      score1++;
      playerScore.textContent = score1;
      checkScore();
    }
  });

  btnScissors.addEventListener(`click`, function () {
    playerAnswer.src = `scissors.svg`;
    playerAnswer.classList.remove(`hidden`);
    randomNumber = Math.trunc(Math.random() * 3 + 1);
    if (randomNumber === 1) {
      scenario1();
      score2++;
      computerScore.textContent = score2;
      checkScore();
    } else if (randomNumber === 2) {
      scenario2();
      score1++;
      playerScore.textContent = score1;
      checkScore();
    } else {
      scenario3();
    }
  });
  btnPaper.addEventListener(`click`, function () {
    playerAnswer.src = `palm.svg`;
    playerAnswer.classList.remove(`hidden`);
    randomNumber = Math.trunc(Math.random() * 3 + 1);
    if (randomNumber === 1) {
      scenario1();
      score1++;
      playerScore.textContent = score1;
      checkScore();
    } else if (randomNumber === 2) {
      scenario2();
    } else {
      scenario3();
      score2++;
      computerScore.textContent = score2;
      checkScore();
    }
  });
  btnReset.addEventListener(`click`, function () {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    score1 = 0;
    score2 = 0;
    computerAnswer.classList.add(`hidden`);
    playerAnswer.classList.add(`hidden`);
  });

  // GAME LOGIC
};

app();
