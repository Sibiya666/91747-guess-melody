import updateGameState from './service-game-state';
import assert from 'assert';

const data = {
  life: 3,
  time: 120,
  answers: 0,
  answersCorrect: 0
};

describe(`updateGameState`, () => {
  it(`Check for the correct answer`, () => {
    assert.deepEqual(updateGameState(data, true), {
      life: 3,
      time: 120,
      answers: 1,
      answersCorrect: 1
    });
  });
  it(`Check for the incorrect answer`, () => {
    assert.deepEqual(updateGameState(data, false), {
      life: 2,
      time: 120,
      answers: 1,
      answersCorrect: 0
    });
  });
});
