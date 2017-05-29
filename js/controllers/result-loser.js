import serviceRender from '../service/service-render';
import loadScreenWelcome from './welcome';

const template = `        
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы проиграли</h2>
    <div class="main-stat">Ничего, вам повезет в следующий раз</div>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>
    `;
const screenLoser = serviceRender.createElement(template);
const replay = screenLoser.querySelector(`.main-replay`);
/**
 * Load screen loser.
 */
const loadScreenLoser = () => {
  serviceRender.renderScreen(screenLoser);
};

/**
 * Event listener.
 * @param {MouseEvent} event
 */
replay.addEventListener(`click`, (event) => {
  event.preventDefault();
  loadScreenWelcome();
});

export default loadScreenLoser;
