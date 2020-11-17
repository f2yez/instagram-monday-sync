
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/rootReducer';
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();
export const sagaMiddleware = createSagaMiddleware();

const routerMid = routerMiddleware(history);

const composeEnhancers = process.env.NODE_ENV !== 'production' ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose: compose;

function configureStore(initialState) {
    const middlewares = [
        routerMid,
        sagaMiddleware,
    ];

    return createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(...middlewares)
        )
    );
}
export default configureStore;