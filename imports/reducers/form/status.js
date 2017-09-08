const setFormStatus = state => ({
    ...state,
    disabled: !state.disabled,
});

export default setFormStatus;