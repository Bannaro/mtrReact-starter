export const TOGGLE_FORM_STATUS = 'TOGGLE_FORM_STATUS';

const toggleFormStatus = formId => ({
    type: TOGGLE_FORM_STATUS,
    payload: formId,
});

export default toggleFormStatus;