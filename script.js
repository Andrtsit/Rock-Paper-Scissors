"use strict";

(() => {
  // Dedicated map for more generic HTML elements.
  const HTMLElements = {
    playerScore: document.getElementById("player-score"),
    computerScore: document.getElementById("computer-score"),
    playerContainer: document.querySelector(".human-participant"),
    computerContainer: document.querySelector(".computer-participant"),
    computerAnswerImg: document.getElementById("computer-answer"),
    playerAnswerImg: document.getElementById("player-answer"),
    resetButton: document.querySelector(".reset-btn"),
  };

  // Dedicated map for player action buttons.
  const HTMLPlayerButtons = {
    rock: document.getElementById("rock"),
    scissors: document.getElementById("scissors"),
    paper: document.getElementById("paper"),
  };

  // Game scenarios.
  const SCENARIO = {
    ROCK: 1,
    PAPER: 2,
    SCISSORS: 3,
  };

  // From plain number to image.
  const scenarioNumberToImageMap = {
    [SCENARIO.ROCK]: "fist.svg",
    [SCENARIO.PAPER]: "palm.svg",
    [SCENARIO.SCISSORS]: "scissors.svg",
  };

  // Player scores.
  let playerScore = 0;
  let computerScore = 0;

  // Utility functions.
  const enableButtons = () => {
    Object.values(HTMLPlayerButtons).forEach((btn) => (btn.disabled = false));
  };

  const disableButtons = () => {
    Object.values(HTMLPlayerButtons).forEach((btn) => (btn.disabled = true));
  };

  const suspendGame = (duration = 1000) => {
    disableButtons();
    setTimeout(() => {
      enableButtons();
      [HTMLElements.playerAnswerImg, HTMLElements.computerAnswerImg].forEach(
        (el) => el.classList.add("hidden")
      );
    }, duration);
  };

  const playerWins = () => {
    playerScore++;
    HTMLElements.playerScore.textContent = playerScore;
  };

  const computerWins = () => {
    computerScore++;
    HTMLElements.computerScore.textContent = computerScore;
  };

  const drawPlayerAnswerOnScreen = (playerScenarioNumber) => {
    HTMLElements.playerAnswerImg.src =
      scenarioNumberToImageMap[playerScenarioNumber];
    HTMLElements.playerAnswerImg.classList.remove("hidden");
  };

  const drawComputerAnswerOnScreen = (computerScenarioNumber) => {
    HTMLElements.computerAnswerImg.src =
      scenarioNumberToImageMap[computerScenarioNumber];
    HTMLElements.computerAnswerImg.classList.remove("hidden");
  };

  const checkScore = function () {
    if (playerScore >= 5) {
      HTMLElements.playerScore.textContent = "You win";
      HTMLElements.playerContainer.classList.add("winner");
      setTimeout(() => {
        onReset();
      }, 1000);
    }

    if (computerScore >= 5) {
      HTMLElements.computerScore.textContent = "You win";
      HTMLElements.computerContainer.classList.add("winner");
      setTimeout(() => {
        onReset();
      }, 1000);
    }
  };

  const onReset = () => {
    enableButtons();
    playerScore = 0;
    computerScore = 0;

    HTMLElements.playerScore.textContent = 0;
    HTMLElements.computerScore.textContent = 0;
    HTMLElements.computerAnswerImg.classList.add("hidden");
    HTMLElements.playerAnswerImg.classList.add("hidden");
    HTMLElements.computerContainer.classList.remove("winner");
    HTMLElements.playerContainer.classList.remove("winner");
  };

  // Scissors game logic.
  const onPlayerScissors = () => {
    drawPlayerAnswerOnScreen(SCENARIO.SCISSORS);

    const computerAnswer = Math.trunc(Math.random() * 3 + 1);
    drawComputerAnswerOnScreen(computerAnswer);

    // Rock beats scissors.
    if (computerAnswer === SCENARIO.ROCK) {
      computerWins();
    }

    // Scissors beats paper.
    if (computerAnswer === SCENARIO.PAPER) {
      playerWins();
    }
  };

  // Paper game logic.
  const onPlayerPaper = () => {
    drawPlayerAnswerOnScreen(SCENARIO.PAPER);

    const computerAnswer = Math.trunc(Math.random() * 3 + 1);
    drawComputerAnswerOnScreen(computerAnswer);

    // Rock beats paper.
    if (computerAnswer === SCENARIO.ROCK) {
      playerWins();
    }

    // Paper beats scissors.
    if (computerAnswer === SCENARIO.SCISSORS) {
      computerWins();
    }
  };

  // Rock game logic.
  const onPlayerRock = () => {
    drawPlayerAnswerOnScreen(SCENARIO.ROCK);

    const computerAnswer = Math.trunc(Math.random() * 3 + 1);
    drawComputerAnswerOnScreen(computerAnswer);

    // Paper beats rock.
    if (computerAnswer === SCENARIO.PAPER) {
      computerWins();
    }

    // Rock beats scissors.
    if (computerAnswer === SCENARIO.SCISSORS) {
      playerWins();
    }
  };

  // Event listeners.
  HTMLPlayerButtons.scissors.addEventListener("click", () => {
    suspendGame();
    onPlayerScissors();
    checkScore();
  });

  HTMLPlayerButtons.paper.addEventListener("click", () => {
    suspendGame();
    onPlayerPaper();
    checkScore();
  });

  HTMLPlayerButtons.rock.addEventListener("click", () => {
    suspendGame();
    onPlayerRock();
    checkScore();
  });

  HTMLElements.resetButton.addEventListener("click", onReset);
})();
