import serviceRender from '../../service/service-render';
import loadArtistScreen from '../level-artist/level-artist';
import template from './welcome-template';
import data from './welcome-data';

const screenWelcome = serviceRender.createElement(template(data));
const play = screenWelcome.querySelector(`.main-play`);

play.addEventListener(`click`, (event) => loadArtistScreen());

export default screenWelcome;
