'use strict';
const AppRockPaperScissors = function () {
  // ELEMENTS

  const score0 = document.querySelector(`.scorePlayer`);
  const score1 = document.querySelector(`.scoreComputer`);
  const image0 = document.querySelector(`.playerImage`);
  const image1 = document.querySelector(`.computerImage`);
  const btnRock = document.querySelector(`.rock-btn`);
  const btnPaper = document.querySelector(`.paper-btn`);
  const btnScissors = document.querySelector(`.scissors-btn`);
  const btnReset = document.querySelector(`.resetBtn`);
  //
  //

  let playerScore = 0;
  let computerScore = 0;
  let computerChoice;
  let game = true;
  let winnerChecker = function () {
    if (playerScore >= 5) {
      game = false;
      document.querySelector(`.player`).style.backgroundColor = `#40c057`;
      document.querySelector(`.computer`).style.opacity = `0`;
    } else if (computerScore >= 5) {
      game = false;

      document.querySelector(`.player`).style.opacity = `0`;
      document.querySelector(`.computer`).style.backgroundColor = `red`;
    } else game = true;
  };

  let timer = function () {
    setTimeout(function () {
      image0.style.display = `none`;
      image1.style.display = `none`;
    }, 1500);
  };

  // EVENT LISTENERS

  btnScissors.addEventListener(`click`, function (e) {
    if (game) {
      computerChoice = Math.floor(Math.random() * 3) + 1;
      image0.style.display = 'block';
      image0.src = 'choice-1.svg';
      image1.style.display = 'block';
      image1.src = `choice-${computerChoice}.svg`;
      // Prettier-ignore
      switch (image1.src.slice(-5)) {
        case `2.svg`:
          playerScore++;
          score0.textContent = playerScore;
          break;
        case `3.svg`:
          computerScore++;
          score1.textContent = computerScore;
          break;
      }
      timer();
      winnerChecker();
    }
  });

  btnRock.addEventListener(`click`, function (e) {
    if (game) {
      computerChoice = Math.floor(Math.random() * 3) + 1;
      image0.style.display = 'block';
      image0.src = 'choice-3.svg';
      image1.style.display = 'block';
      image1.src = `choice-${computerChoice}.svg`;
      switch (image1.src.slice(-5)) {
        case `1.svg`:
          playerScore++;
          score0.textContent = playerScore;
          break;
        case `2.svg`:
          computerScore++;
          score1.textContent = computerScore;
          break;
      }
      timer();
      winnerChecker();
    }
  });
  btnPaper.addEventListener(`click`, function (e) {
    if (game) {
      computerChoice = Math.floor(Math.random() * 3) + 1;
      image0.style.display = 'block';
      image0.src = 'choice-2.svg';
      image1.style.display = 'block';
      image1.src = `choice-${computerChoice}.svg`;
      console.log(image1.src.slice(-5));
      switch (image1.src.slice(-5)) {
        case `3.svg`:
          playerScore++;
          score0.textContent = playerScore;
          break;
        case `1.svg`:
          computerScore++;
          score1.textContent = computerScore;
          break;
      }
      timer();
      winnerChecker();
    }
  });

  btnReset.addEventListener(`click`, function (e) {
    game = true;
    playerScore = 0;
    computerScore = 0;
    score0.textContent = 0;
    score1.textContent = 0;
    image0.style.display = `none`;
    image1.style.display = `none`;
    document.querySelector(`.player`).style.opacity = `1`;
    document.querySelector(`.computer`).style.opacity = `1`;
    document.querySelector(`.player`).style.backgroundColor = `#ff206e`;
    document.querySelector(`.computer`).style.backgroundColor = `#277da1`;
  });
};

// INIT

AppRockPaperScissors();
