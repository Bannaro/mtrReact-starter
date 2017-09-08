export const SET_FORM_VALUE = 'SET_FORM_VALUE';

const setFormValue = (formId, key, value) => ({
    type: SET_FORM_VALUE,
    payload: {
        formId,
        key,
        value,
    },
});

export default setFormValue;