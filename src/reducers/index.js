import { combineReducers } from 'redux';
import auth from './auth';
import addapp from './addappointement';
import getdoctor from './getdoctor';
import patient from './getpatient';
import getapp from './getapp';

export default combineReducers({
    auth,
    addapp:addapp,
    getdoctor:getdoctor,
    patient:patient,
    getapp:getapp
});