const setFormValue = (state, action) => ({
    ...state,
    fields: {
        ...state.fields,
        [action.payload.key]: action.payload.value,
    },
});

export default setFormValue;