import { Tracker } from 'meteor/tracker';
import createReactiveMiddlewares from 'meteor-redux-middlewares';

import { applyMiddleware, createStore, compose } from 'redux';

import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';


import rootReducer from '/imports/reducers/root';

const router = routerMiddleware(browserHistory);
const {
    sources,
    subscriptions,
} = createReactiveMiddlewares(Tracker);


const middlewares = applyMiddleware(sources, subscriptions, thunk, router);
const store = createStore(rootReducer, ((typeof window.devToolsExtension === 'undefined')?
    compose(
        middlewares
    ):compose(
        middlewares,
        window.devToolsExtension()
    ))
);

export default store;