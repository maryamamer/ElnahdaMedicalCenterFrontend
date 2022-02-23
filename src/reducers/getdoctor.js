import {
  GET_DOCTOR
} from "../actions/types";

const INITIAL_STATE = [{}]
export default function getdoctor(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (action.type) {
    case GET_DOCTOR:
      return [action.payload]
    default:
      return state;
  }
}