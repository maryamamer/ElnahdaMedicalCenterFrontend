import {
    GET_PATIENT
} from "../actions/types";

const INITIAL_STATE = [{}]
export default function getpatient(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (action.type) {
        case GET_PATIENT:
            return [action.payload]
        default:
            return state;
    }
}