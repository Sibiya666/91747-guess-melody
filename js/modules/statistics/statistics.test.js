import getCurrentStatistic from '../../modules/statistics/statistics';
import statisticsData from './statistics-cacher-data';
import assert from 'assert';

describe(`,kf-,kif`, () =>{

  it(`gfe-gfe`, () => {
    assert.equal((getCurrentStatistic(statisticsData, {time: 19, answers: 9})), {statics: Array(6), percentage: 33});
  });

});
