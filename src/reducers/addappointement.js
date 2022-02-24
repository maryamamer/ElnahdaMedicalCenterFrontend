import jwtDecode from "jwt-decode"
import {
    ADD_APPOINTMENT,
    ADD_Patient_APPOINTMENT,
    ADD_Doctor_APPOINTMENT,
    REM_APPOINTMENT,
    ADDED_APP

   
} from '../actions/types';


const INITIAL_STATE = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: null,
  isregistered:null,
  app: null,
};
export default function addapp(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_APPOINTMENT:
      return {
        ...state,
        app: payload,
       
      };
    case ADDED_APP:
      // const token = localStorage.getItem("access");
      // const user = jwtDecode(token).user_id;
      // localStorage.setItem('appointment', JSON.stringify(payload.filter((r)=>r.patient_id===user)))
      return {
        app:payload,
        isregistered:true
      }
    case ADD_Patient_APPOINTMENT:
      return {
        ...state,
        app: payload,
      };
    case REM_APPOINTMENT:
            localStorage.removeItem('appointment');
            return {
                ...state,
                isregistered: false,
            }

    default:
      return state;
  }
}
