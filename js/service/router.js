import serviceRender from './service-render';
import welcome from '../controllers/welcome/welcome';

const LIST_STATE = {
  'artist-screen': welcome,
};
const changeState = (state) => {
  serviceRender.renderScreen(LIST_STATE[state]);
};
export default changeState;
