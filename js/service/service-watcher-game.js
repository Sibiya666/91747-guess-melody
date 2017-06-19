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
const isGameOver = (data) => data.life === GAME_OVER.life ||
                          data.answers === GAME_OVER.answers;

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

export default watcherGameData;
