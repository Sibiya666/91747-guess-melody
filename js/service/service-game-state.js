/**
 * Get current data game state
 * @param {Object} gameState
 * @param {boolean} answer
 * @return {Object}
 * */
const updateGameState = (gameState, answer) => {
  let currentDataGameState = Object.assign({}, {
    life: gameState.life - (answer === true ? 0 : 1),
    time: 120,
    answers: gameState.answers + 1,
    answersCorrect: gameState.answersCorrect + (answer ? 1 : 0)
  });

  return currentDataGameState;
};

export default updateGameState;
