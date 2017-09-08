import { STOP_SUBSCRIPTION } from 'meteor-redux-middlewares';

const createSubscriptionReducer = (subscriptionId, multi) => {
    const key = multi ? 'docs' : 'doc';
    const initialState = {
        ready: false,
        [key]: multi ? [] : null,
    };

    return (state = initialState, action) => {
        switch (action.type) {
            case `${subscriptionId}_SUBSCRIPTION_READY`:
                return {
                    ...state,
                    ready: action.payload.ready,
                };
            case `${subscriptionId}_SUBSCRIPTION_CHANGED`:
                return {
                    ...state,
                    [key]: action.payload,
                };
            case STOP_SUBSCRIPTION:
                return action.payload === subscriptionId
                    ? initialState
                    : state;
            default:
                return state;
        }
    };
};

export const createListSubscriptionReducer = subscriptionId => createSubscriptionReducer(subscriptionId, true);
export const createDisplaySubscriptionReducer = subscriptionId => createSubscriptionReducer(subscriptionId, false);