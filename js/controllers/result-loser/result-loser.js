import serviceRender from '../../service/service-render';
import changeState from '../../service/router';
import data from './result-data';
import template from './result-template';

const screenResult = () => serviceRender.createElement(template(data));
const replay = screenResult.querySelector(`.main-replay`);

/**
 * Event listener.
 * @param {MouseEvent} event
 */
replay.addEventListener(`click`, (event) => {
  event.preventDefault();
  changeState();
});

export default screenResult;
