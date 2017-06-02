import serviceRender from '../../service/service-render';
import changeState from '../../service/router';
import data from './result-data';
import template from './result-template';

/**
 * Get Screen of game.
 * @return {HTMLElement}
 */
const getScreen = () => {
  /**
   * Get random result.
   * @return {string}
   */
  const getRandomResult = () => {
    if (Math.round(Math.random())) {
      return `winner`;
    } else {
      return `loser`;
    }
  };

  const screenResult = serviceRender.createElement(template(data[getRandomResult()]));
  const replay = screenResult.querySelector(`.main-replay`);

  /**
   * Event listener.
   * @param {MouseEvent} event
   */
  replay.addEventListener(`click`, (event) => {
    event.preventDefault();
    changeState(`welcome-screen`);
  });

  return screenResult;
}


export default getScreen;
