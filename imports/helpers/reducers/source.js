const createReactiveSourceReducer = (sourceId, initialState = null) => (state = initialState, action) => {
    switch (action.type) {
        case `${sourceId}_REACTIVE_SOURCE_CHANGED`:
            return action.payload;
        default:
            return state;
    }
};

export default createReactiveSourceReducer;