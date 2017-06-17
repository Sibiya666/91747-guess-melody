import data from './welcome-data';
import template from './welcome-template';
import serviceRender from '../../service/service-render';
import changeState from '../../service/service-router';
import getCurrentStatistic from '../../modules/statistics/statistics';
import statistics from '../../modules/statistics/statistics-data';
/**
 * Get Screen of game.
 * @return {HTMLElement}
 */
const getScreen = () => {
  const screenWelcome = serviceRender.createElement(template(data));
  const play = screenWelcome.querySelector(`.main-play`);
  play.addEventListener(`click`, (event) => changeState(`artist-screen`));
  return screenWelcome;
};

/**
 *тут можно  посмотреть как работает функция
 */
console.log(getCurrentStatistic(statistics, {time: 19, answers: 9}));

export default getScreen;
