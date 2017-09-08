export const CLEAR_FORM = 'CLEAR_FORM';

const clearForm = formId => ({
    type: CLEAR_FORM,
    payload: formId,
});

export default clearForm;