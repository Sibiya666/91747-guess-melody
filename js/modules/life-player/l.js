/**
 *  @readonly
 *  @type Object<number>
 */
const INITIAL_GAME_DATA = {
  life: 3,
  time: 120,
  correctAnswers: 0
};

const watchGameData = (answer, nextState) => {
  switch (true) {
    case (life === 0):
      changeState(`result`);
      break;
    case (answer === false && life !== 0) :
      life = answer - 1;
      changeState2;
      break;
    case (answer === true):
      changeState2();
      break;
  }
};
