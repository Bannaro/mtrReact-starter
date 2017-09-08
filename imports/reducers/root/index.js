import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';

const rootReducer = combineReducers({
    pages,
    roles,
    user,
    routing: routerReducer,
});

export default rootReducer;