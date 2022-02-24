import {
  GET_DOCTOR
} from "../actions/types";

const INITIAL_STATE = [{}]
export default function getdoctor(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_DOCTOR:
      return payload
    default:
      return state;
  }
}