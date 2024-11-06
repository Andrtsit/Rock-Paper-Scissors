`use strict`;

const app = function () {
  // elements needed
  const scorePlayer = document.querySelector(`.scorePlayer`);
  const scoreComputer = document.querySelector(`.scoreComputer`);
  const btnRock = document.querySelector(`.rock`);
  const btnScissors = document.querySelector(`.scissors`);
  const btnPaper = document.querySelector(`.paper`);
  const btnReset = document.querySelector(`.reset`);
  const answerComputer = document.querySelector(`.answerComputer`);
  const answerPlayer = document.querySelector(`.playerAnswer`);
  const playerContainer = document.querySelector(`.player`);
  const computerContainer = document.querySelector(`.computer`);

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
    answerComputer.src = `fist.svg`;
    answerComputer.classList.remove(`hidden`);
    disableAllBtns();
    setTimeout(() => {
      enableAllBtns();
      answerPlayer.classList.add(`hidden`);
      answerComputer.classList.add(`hidden`);
    }, 1000);
  };
  let scenario2 = function () {
    answerComputer.src = `palm.svg`;
    answerComputer.classList.remove(`hidden`);
    disableAllBtns();
    setTimeout(() => {
      enableAllBtns();
      answerPlayer.classList.add(`hidden`);
      answerComputer.classList.add(`hidden`);
    }, 1000);
  };
  let scenario3 = function () {
    answerComputer.src = `scissors.svg`;
    answerComputer.classList.remove(`hidden`);
    disableAllBtns();
    setTimeout(() => {
      enableAllBtns();
      answerPlayer.classList.add(`hidden`);
      answerComputer.classList.add(`hidden`);
    }, 1000);
  };

  const checkScore = function () {
    if (score1 >= 5) {
      scorePlayer.textContent = ` you win`;
      disableAllBtns();
      playerContainer.classList.add(`winner`);
      setTimeout(() => {
        enableAllBtns();
        playerContainer.classList.remove(`winner`);
        scorePlayer.textContent = `0`;
        scoreComputer.textContent = `0`;
        answerComputer.classList.add(`hidden`);
        answerPlayer.classList.add(`hidden`);
        score1 = 0;
        score2 = 0;
      }, 2000);
    } else if (score2 >= 5) {
      scoreComputer.textContent = ` you win`;
      disableAllBtns();
      computerContainer.classList.add(`winner`);
      setTimeout(() => {
        enableAllBtns();
        computerContainer.classList.remove(`winner`);
        scorePlayer.textContent = `0`;
        scoreComputer.textContent = `0`;
        answerComputer.classList.add(`hidden`);
        answerPlayer.classList.add(`hidden`);
        score1 = 0;
        score2 = 0;
      }, 2000);
    }
  };
  // EVENT LISTENERS
  btnRock.addEventListener(`click`, function () {
    answerPlayer.src = `fist.svg`;
    answerPlayer.classList.remove(`hidden`);
    randomNumber = Math.trunc(Math.random() * 3 + 1);
    if (randomNumber === 1) {
      scenario1();
    } else if (randomNumber === 2) {
      scenario2();
      score2++;
      scoreComputer.textContent = score2;
      checkScore();
    } else {
      scenario3();
      score1++;
      scorePlayer.textContent = score1;
      checkScore();
    }
  });

  btnScissors.addEventListener(`click`, function () {
    answerPlayer.src = `scissors.svg`;
    answerPlayer.classList.remove(`hidden`);
    randomNumber = Math.trunc(Math.random() * 3 + 1);
    if (randomNumber === 1) {
      scenario1();
      score2++;
      scoreComputer.textContent = score2;
      checkScore();
    } else if (randomNumber === 2) {
      scenario2();
      score1++;
      scorePlayer.textContent = score1;
      checkScore();
    } else {
      scenario3();
    }
  });
  btnPaper.addEventListener(`click`, function () {
    answerPlayer.src = `palm.svg`;
    answerPlayer.classList.remove(`hidden`);
    randomNumber = Math.trunc(Math.random() * 3 + 1);
    if (randomNumber === 1) {
      scenario1();
      score1++;
      scorePlayer.textContent = score1;
      checkScore();
    } else if (randomNumber === 2) {
      scenario2();
    } else {
      scenario3();
      score2++;
      scoreComputer.textContent = score2;
      checkScore();
    }
  });
  btnReset.addEventListener(`click`, function () {
    scorePlayer.textContent = 0;
    scoreComputer.textContent = 0;
    score1 = 0;
    score2 = 0;
    answerComputer.classList.add(`hidden`);
    answerPlayer.classList.add(`hidden`);
  });

  // GAME LOGIC
};

app();
