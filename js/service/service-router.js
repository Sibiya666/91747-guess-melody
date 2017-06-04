import welcome from '../modules/welcome/welcome';
import levelArtist from '../modules/level-artist/level-artist';
import levelGenre from '../modules/level-genre/level-genre';
import result from '../modules/result/result';
import serviceRender from './service-render';

/**
 * @readonly
 * @type Object<HTMLElement>
 * */
const LIST_STATE = {
  'welcome-screen': welcome,
  'artist-screen': levelArtist,
  'genre-screen': levelGenre,
  'result': result
};

/**
 * Render current screen.
 * @param {string} state
 * */
const changeState = (state) => {
  serviceRender.renderScreen(LIST_STATE[state]());
};

export default changeState;
