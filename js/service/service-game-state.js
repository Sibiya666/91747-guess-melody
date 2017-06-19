/**
 * Get current data game state
 * @param {Object} gameState
 * @param {boolean} answer
 * @return {Object}
 * */
const gameStateService = (gameState, answer) => {
  let currentDataGameState = Object.assign({}, {
    life: gameState.life - (answer === true ? 0 : 1),
    time: 120,
    answers: gameState.answers + 1,
    answersCorrect: gameState.answersCorrect + (answer === true ? 1 : 0)
  });

  return currentDataGameState;
};

export default gameStateService;
