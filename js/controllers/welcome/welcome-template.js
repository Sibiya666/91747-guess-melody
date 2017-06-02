/**
 * Template.
 * @param {Object} data
 * @return {string}
 */
const template = (data) => `
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">${data.title}</h2>
    <p class="text main-text">
      ${data.text}
    </p>
  </section>
    `;

export default template;
