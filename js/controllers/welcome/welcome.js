import data from './welcome-data';
import template from './welcome-template';
import serviceRender from '../../service/service-render';
import changeState from '../../service/router';

const screenWelcome = serviceRender.createElement(template(data))
const play = screenWelcome.querySelector(`.main-play`);

play.addEventListener(`click`, (event) => changeState(`artist-screen`))

export default screenWelcome;
