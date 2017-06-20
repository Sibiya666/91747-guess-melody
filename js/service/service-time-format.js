/**
 * Return time
 * @param {number} total
 * @param {number} passed
 * @return {Object}
 */
const formatTime = (total, passed) => {
  const minutesLeft = Math.floor((total - passed) / 60 / 1000);
  const secondsLeft = (total - passed - minutesLeft * 60 * 1000) / 1000;

  return {
    minutes: minutesLeft,
    seconds: secondsLeft
  };
};

export default formatTime;
