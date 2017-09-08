import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from '/imports/store';

// Render function
const history = syncHistoryWithStore(browserHistory, store);

const renderRoutes = () => (
    <Provider store={store}>
        <Router history={history}>
        </Router>
    </Provider>
);

export default renderRoutes;