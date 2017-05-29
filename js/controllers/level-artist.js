import serviceRender from '../service/service-render';
import loadScreenGenre from './level-genre';
/**
 * @type Array<string>
 */
const listArtists = [`Пелагея`, `Краснознаменная дивизия имени моей бабушки`,
  `Lorde`];
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
      
        ${listArtists.map((listArtistsItem) => `
          <div class="main-answer-wrapper">
            <input class="main-answer-r" type="radio" id="answer-2" name="answer" value="val-1" />
            <label class="main-answer" for="answer-2">
              <img class="main-answer-preview" src="">
              ${listArtistsItem}
            </label>
          </div>`).join(``)}
        
      </form>
    </div>
  </section>
    `;
const screenArtists = serviceRender.createElement(template);
const listAnswers = screenArtists.querySelector(`.main-list`);
const loadArtistsScreen = () => serviceRender.renderScreen(screenArtists);
/**
 * Event listener.
 * @param {MouseEvent} event
 */
listAnswers.addEventListener(`click`, (event) => {
  if (event.target.classList.contains(`main-answer-r`)) {
    loadScreenGenre();
  }
});

export default loadArtistsScreen;
