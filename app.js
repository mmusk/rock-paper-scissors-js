const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = "ROCK";
const DRAW = "DRAW";
const PLAYER_WINS = "PLAYER WON";
const COMPUTER_WINS = "COMPUTER_WON";

let isGameRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}, ''`
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalaid Input we chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === SCISSORS && pChoice === ROCK) ||
      (cChoice === PAPER && pChoice === SCISSORS)
    ? PLAYER_WINS
    : COMPUTER_WINS;

startGameBtn.addEventListener("click", () => {
  if (isGameRunning) {
    return;
  }
  isGameRunning = true;
  
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = getWinner(computerSelection, playerSelection);
  

  let message = `You chose ${playerSelection}, computer chose ${computerSelection}, therefore you `;
  if (winner === DRAW){
      message = message + 'had a Draw!'
  } else if (winner === "PLAYER WON"){
      message = message + 'Won!'
  } else{
      message = message + 'Lost!'
  }
  alert(message);

  isGameRunning = false;
});
