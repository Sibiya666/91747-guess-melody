import data from './welcome-data';
import template from './welcome-template';
import serviceRender from '../../service/service-render';
import changeState from '../../service/router';

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


export default getScreen;
