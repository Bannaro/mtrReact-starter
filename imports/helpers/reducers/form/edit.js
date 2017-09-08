import { SET_FORM_VALUE } from '/imports/actions/form/value';
import setFormValue from '/imports/reducers/form/value';

import { TOGGLE_FORM_STATUS } from '/imports/actions/form/status';
import setFormStatus from '/imports/reducers/form/status';

import { CLEAR_FORM } from '/imports/actions/form/clear';

const createEditFormReducer = ({ formId, fields, modifiers }) => {
    const initialState = {
        fields,
        disabled: false,
    };

    return (state = initialState, action) => {
        switch (action.type) {
            case SET_FORM_VALUE:
                return action.payload.formId === formId
                    ? setFormValue(state, action)
                    : state;
            case TOGGLE_FORM_STATUS:
                return action.payload === formId
                    ? setFormStatus(state)
                    : state;
            case CLEAR_FORM:
                return action.payload === formId
                    ? initialState
                    : state;
            default:
                let nextState = state;

                Object.keys(modifiers).some(subscriptionId => {
                    const match = action.type === `${subscriptionId}_SUBSCRIPTION_CHANGED`;

                    if (match) {
                        nextState = {
                            ...state,
                            fields: modifiers[subscriptionId](action),
                        };
                    }

                    return match;
                });

                return nextState;
        }
    };
};

export default createEditFormReducer;