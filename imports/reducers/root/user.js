import createReactiveSourceReducer from '/imports/helpers/reducers/source';
import { USER_SOURCE } from '/imports/constants/sources';

const user = createReactiveSourceReducer(USER_SOURCE);

export default user;