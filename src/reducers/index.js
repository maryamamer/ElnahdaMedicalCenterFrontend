import { combineReducers } from 'redux';
import auth from './auth';
import addapp from './addappointement';
import doctor from './getdoctor';

export default combineReducers({
    auth,
    addapp:addapp,
    doctor:doctor
});