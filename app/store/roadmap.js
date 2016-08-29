import { createStore } from 'redux';
import roadmapApp from '../reducers/roadmapApp';

let storeByEnvironment = null;
if (process.env.NODE_ENV === 'production') {
  storeByEnvironment = createStore(roadmapApp);
} else {
  storeByEnvironment =
    createStore(roadmapApp,
      window.devToolsExtension &&
      window.devToolsExtension());
}
const store = storeByEnvironment;
export default store;
