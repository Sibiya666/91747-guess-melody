const sectionMain = document.querySelector(`.main`);
const serviceRender = {
  /**
   * Create html element.
   * @param {string} template
   * @return {HTMLElement}
   */
  createElement(template) {
    const container = document.createElement(`div`);
    container.innerHTML = template;
    return container.children[0];
  },

  /**
   * Render html element.
   * @param {HTMLElement} screen
   */
  renderScreen(screen) {
    sectionMain.innerHTML = ``;
    sectionMain.appendChild(screen);
  }
};

export default serviceRender;
