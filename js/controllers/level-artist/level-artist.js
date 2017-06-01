import serviceRender from '../../service/service-render';
import initializePlayer from '../../player';
import loadScreenGenre from '../level-genre/level-genre';
import data from './level-artist-data';

const artistTemplate = (artist) => `
<section class="main main--answer">
    <div class="main-answer-wrapper">
      <input class="main-answer-r" type="radio" id="answer-${data[artist].artistId}" name="answer" 
                                                value="val-${data[artist].artistId}" />
      <label class="main-answer" for="answer-${data[artist].artistId}">
        <img class="main-answer-preview" src="${data[artist].artistImg}">
        ${data[artist].artistName}
      </label>
    </div>`;

const template = `
           <section class="main main--level main--level-artist">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(../#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">02</span>
        <span class="timer-value-dots">:</span>
        <span class="timer-value-secs">00</span>
      </div>
    </svg>
    <div class="main-wrap">
      <div class="main-timer"></div>
      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper"></div>
      <form class="main-list">
        ${Object.keys(data).map((dataItem) => artistTemplate(dataItem)).join(``)}
      </form>
    </div>
  </section>
    `;

const screenArtists = serviceRender.createElement(template);
const listAnswers = screenArtists.querySelector(`.main-list`);
const player = screenArtists.querySelector(`.player-wrapper`);
/**
 * Load screen Artists.
 */
const loadScreenArtists = () => {
  serviceRender.renderScreen(screenArtists);
};

/**
 * Event listener.
 * @param {MouseEvent} event
 */
listAnswers.addEventListener(`click`, (event) => {
  if (event.target.classList.contains(`main-answer-r`)) {
    loadScreenGenre();
  }
});

initializePlayer(player, data.atist1.artistSong, false, true);
export default loadScreenArtists;
