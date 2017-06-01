import welcome from '../controllers/welcome/welcome';
import levelArtist from '../controllers/level-artist/level-artist';
import levelGenre from '../controllers/level-genre/level-genre';
// import resultLoser from '../controllers/result-loser/result-loser';
import result from '../controllers/result/result';
import serviceRender from './service-render';

/**
 * @readonly
 * @type Object<HTMLElement>
 * */
const LIST_STATE = {
  'welcome-screen': welcome,
  'artist-screen': levelArtist,
  'genre-screen': levelGenre,
  // 'result-loser': resultLoser,
  // 'result-winner': welcome,
  'result': result
};

const changeState = (state) => {
  serviceRender.renderScreen(LIST_STATE[state]);
};

export default changeState;
