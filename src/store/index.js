import initialState from './reducers/initialState';
import configureStore from './store';
import { sagaMiddleware } from './store';
import rootSaga from './sagas'

// Saga configurations
const store = configureStore(initialState);
sagaMiddleware.run(rootSaga);
export default store;