import gameStateService from './service-game-state';
import data from '../modules/game-data-state/initial-data-game';
import assert from 'assert';

describe(`gameStateService`, () => {
  it(`Check for the correct answer`, () => {
    assert.deepEqual(gameStateService(data, true), {
      life: 3,
      time: 120,
      answers: 1,
      answersCorrect: 1
    });
  });
  it(`Check for the incorrect answer`, () => {
    assert.deepEqual(gameStateService(data, false), {
      life: 2,
      time: 120,
      answers: 1,
      answersCorrect: 0
    });
  });
  it(`Check for a negative number of lives`, () => {
    assert.equal(gameStateService({
      life: 0,
      time: 120,
      answers: 0,
      answersCorrect: 0
    }, false).life, -1);
  });
  it(`Check for number of answers`, () => {
    assert.equal(gameStateService({
      life: 1,
      time: 120,
      answers: 0,
      answersCorrect: 2
    }, true).answersCorrect, 1);
  });
});
