import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import commonReducer from './commonReducer';

export default combineReducers({
	router: routerReducer,
	common: commonReducer,
});
