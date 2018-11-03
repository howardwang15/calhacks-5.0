import { combineReducers } from 'redux';
import authReducer from './auth';
import tutorFormReducers from './tutor_form_reducers';

const rootReducer = combineReducers({
    authReducer,
    tutorFormReducers
});

export default rootReducer;
