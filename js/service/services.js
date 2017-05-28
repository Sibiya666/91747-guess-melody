// const createTemplate = (template) => {
//   const container = document.createElement(`div`);
//   container.innerHTML = template;
//   return container.children[0];
// };
const sectionMain = document.querySelector(`.main`);
const service = {
  createElement(template) {
    const container = document.createElement(`div`);
    container.innerHTML = template;
    return container.children[0];
  },

  renderScreen(screen) {
    sectionMain.innerHTML = ``;
    sectionMain.appendChild(screen);

  }
};

export default service;
