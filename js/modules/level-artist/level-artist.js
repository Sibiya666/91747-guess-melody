import serviceRender from '../../service/service-render';
import initializeCountdown from '../../service/service-timer';
import initializePlayer from '../player/player';
import changeState from '../../service/service-router';
import data from './level-artist-data';
import template from './level-artist-template';

/**
 * Get Screen of game.
 * @return {HTMLElement}
 */
const getScreen = () => {
  const screenArtists = serviceRender.createElement(template(data));
  const listAnswers = screenArtists.querySelector(`.main-list`);
  const player = screenArtists.querySelector(`.player-wrapper`);

  /**
   * Event listener.
   * @param {MouseEvent} event
   */
  listAnswers.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`main-answer-r`)) {
      changeState(`genre-screen`);
    }
  });

  initializePlayer(player, data.atist1.artistSong, false, true);
  initializeCountdown(screenArtists);
  return screenArtists;
};

export default getScreen;
