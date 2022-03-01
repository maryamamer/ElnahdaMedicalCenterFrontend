import jwtDecode from "jwt-decode"
import {
    ADDED_APP
   
} from '../actions/types';


const INITIAL_STATE = {

  isregistered:null,
  app: null,
};
export default function getapp(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case ADDED_APP:
      // const token = localStorage.getItem("access");
      // const user = jwtDecode(token).user_id;
      // localStorage.setItem('appointment', JSON.stringify(payload.filter((r)=>r.patient_id===user)))
      return {
        app:payload,
        isregistered:true
      }

    default:
      return state;
  }
}