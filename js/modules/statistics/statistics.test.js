import getCurrentStatistic from './getCurrentStatistic';
import data from './statistics-data';
import assert from 'assert';

const testStatistics = {time: 19, answers: 9};
describe(`getSt`, () => {
  it(`пау`, () => {
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
    }, getCurrentStatistic(data, testStatistics));
  });
});


