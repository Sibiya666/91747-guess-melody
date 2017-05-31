import serviceRender from './service-render';

const changeState = (state) => {
  serviceRender.renderScreen(state);
};

export default changeState;
