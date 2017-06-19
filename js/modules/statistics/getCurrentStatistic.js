/**
 * Compare results.
 * @param {Array<number>} a
 * @param {Array<number>} b
 * @return {Array<Object>}
 */
const compareResults = (a, b) => a.answers - b.answers || b.time - a.time;

/**
 * Compare results.
 * @param {Array<Object>} oldListResults
 * @param {Object} listResultplayer
 * @return {Object}
 */
const getCurrentStatistic = (oldListResults, listResultplayer) => {
  const listResult = oldListResults.concat(listResultplayer);
  const newListResult = listResult.slice();
  const compereListResult = newListResult.sort(compareResults).reverse();
  const playerPosition = compereListResult.indexOf(listResultplayer);
  const percentageOfPlayers = (Math.floor((compereListResult.length - (playerPosition + 1)) / compereListResult.length * 100));
  const currentStatistic = {
    statics: compereListResult,
    percentage: percentageOfPlayers
  };

  return currentStatistic;
};

export default getCurrentStatistic;
