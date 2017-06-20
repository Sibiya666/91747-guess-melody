/**
 * Get current data game state
 * @param {Object} gameState
 * @param {boolean} answer
 * @param {number} timer
 * @return {Object}
 * */
const updateGameState = (gameState, answer, timer) => {
  let currentDataGameState = Object.assign({}, {
    life: gameState.life - (answer === true ? 0 : 1),
    time: gameState.time - timer.minutes * 60 - timer.seconds,
    answers: gameState.answers + 1,
    answersCorrect: gameState.answersCorrect + (answer ? 1 : 0)
  });

  return currentDataGameState;
};

export default updateGameState;
