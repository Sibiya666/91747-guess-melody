import serviceRender from '../service/service-render';
import initializePlayer from '../player';
import loadScreenGenre from './level-genre';


const listArtists = {
  atist1: {
    artistId: `1`,
    artistName: `Твоя Мама`,
    artistImg: `https://i.ytimg.com/vi/nU4hDsOnCXM/hqdefault.jpg`,
    artistSong: `./music/Grassy_Hill.mp3`,
  },
  atist2: {
    artistId: `2`,
    artistName: `Краснознаменная дивизия имени моей бабушки`,
    artistImg: `https://upload.wikimedia.org/wikipedia/ru/thumb/9/91/80_gvardejskaja_str._divizija.JPG/400px-80_gvardejskaja_str._divizija.JPG`,
    artistSong: ``,
  },
  atist3: {
    artistId: `3`,
    artistName: `Те пасоны с гаража`,
    artistImg: `http://rock-shckola.ru/wp-content/uploads/2015/05/11131.jpg`,
    artistSong: ``,
  }
};

const templateArtist = (artist) => `
    <div class="main-answer-wrapper">
      <input class="main-answer-r" type="radio" id="answer-${listArtists[artist].artistId}" name="answer" 
                                                value="val-${listArtists[artist].artistId}" />
      <label class="main-answer" for="answer-${listArtists[artist].artistId}">
        <img class="main-answer-preview" src="${listArtists[artist].artistImg}">
        ${listArtists[artist].artistName}
      </label>
    </div>`;

const template = `
           <section class="main main--level main--level-artist">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
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
        ${Object.keys(listArtists).map((listArtistsItem) => templateArtist(listArtistsItem)).join(``)}
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

initializePlayer(player, listArtists.atist1.artistSong, false, true);
export default loadScreenArtists;
