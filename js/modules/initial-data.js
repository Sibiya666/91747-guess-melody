import changeState from '../../service/service-router';

const INITIAL_DATA_GAME = {
  life: 3,
  time: 120,
  answers: []
};

let currentDataState = Object.assign({}, INITIAL_DATA_GAME);

const watcherDataGame = (answer, nextState) => {
  currentDataState.answers.push(answer);
  switch (true) {
    case (answer !== true && currentDataState.life === 1) :
      currentDataState.life = 0;
      changeState(`result`);
      break
    case (answer !== true) :
      currentDataState.life -= 1;
      break;
    case (answer === true) :
      break;
  }
  changeState(nextState);
};
