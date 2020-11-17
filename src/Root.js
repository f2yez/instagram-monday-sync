import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux';
import  { history } from './store/store';
import { routes, renderRoutes } from './routes';
import { setMondayToken } from './config/monday.config';
import store from './store';
import { getMe } from './store/reducers/commonReducer';

// Add my token to monday api
setMondayToken();
// Get me using personal token
store.dispatch(getMe());

// My root class configured with store provider and redux routers
class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    { renderRoutes(routes) }
                </ConnectedRouter>
            </Provider>
        )
    }
}
export default Root;
