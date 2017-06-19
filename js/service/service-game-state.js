import changeState from './service-router';
/**
 * @constant
 * @enum {number}
 */
const GAME_OVER = {
  life: 0,
  answers: 2
};

/**
 * Is game over?
 * @param {Object<number>} data
 * @return {boolean}
 */
const isGameOver = (data) => data.life === GAME_OVER.life || data.answers === GAME_OVER.answers;

/**
 * Watcher game data
 * @param {string} nextState
 */
const watcherGameData = (nextState) => {
  if (isGameOver) {
    changeState(`result`);
  } else {
    changeState(nextState);
  }
};

/**
 * Get current data game state
 * @param {Object} gameState
 * @param {boolean} answer
 * @param {string} nextState
 * @return {Object}
 * */
const gameStateService = (gameState, answer, nextState) => {
  let currentDataGameState = Object.assign({}, {
    life: gameState.life - (answer === true ? 0 : 1),
    answers: gameState + 1,
    answersCorrect: gameState.answersCorrect + (answer === true ? 1 : 0)
  });

  watcherGameData(nextState);
  return currentDataGameState;
};

export default gameStateService;
