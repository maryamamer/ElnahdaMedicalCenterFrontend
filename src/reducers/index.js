import { combineReducers } from 'redux';
import auth from './auth';
import addapp from './addappointement';
import getdoctor from './getdoctor';
import patient from './getpatient';
import getapp from './getapp';
import user from './users';


export default combineReducers({
    auth,
    addapp:addapp,
    getdoctor:getdoctor,
    patient:patient,
    getapp:getapp,
    user:user
});