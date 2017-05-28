import service from '../service/services';
import artistsScreenLoad from './level-artist';

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
const welcomeScreen = service.createElement(template);
const play = welcomeScreen.querySelector(`.main-play`);
const welcomeScreenLoad = () => service.renderScreen(welcomeScreen);

// я чет не могу пристроить удаление этих listener
play.addEventListener(`click`, (event) => artistsScreenLoad());

export default welcomeScreenLoad;
