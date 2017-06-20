import getCurrentStatistic from './get-current-tatistic';
import assert from 'assert';

const data = [
  {time: 44, answers: 10},
  {time: 50, answers: 7},
  {time: 18, answers: 10},
  {time: 32, answers: 10},
  {time: 20, answers: 8},
];

describe(`getCurrentStatistic`, () => {
  it(`comparison`, () => {
    assert.deepEqual({
      statics: [
        {time: 18, answers: 10},
        {time: 32, answers: 10},
        {time: 44, answers: 10},
        {time: 19, answers: 9},
        {time: 20, answers: 8},
        {time: 50, answers: 7}
      ],
      percentage: 33
    }, getCurrentStatistic(data, {time: 19, answers: 9}));
  });
});

