import serviceRender from '../service/service-render';
import loadArtistScreen from './level-artist';

const template = `
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
    Правила просты&nbsp;— за&nbsp;2 минуты дать
    максимальное количество правильных ответов.<br>
    Удачи!
    </p>
  </section>
    `;
const screenWelcome = serviceRender.createElement(template);
const play = screenWelcome.querySelector(`.main-play`);
const loadScreenWelcome = () => serviceRender.renderScreen(screenWelcome);

/**
 * Event listener.
 * @param {MouseEvent} event
 */
play.addEventListener(`click`, (event) => loadArtistScreen());

export default loadScreenWelcome;
