import {
  GET_DOCTOR,
  ADD_DOCTOR,
  Update_doctor,
  Delete_Doctor
} from "../actions/types";

const INITIAL_STATE = {
  doctor:[]
}
export default function getdoctor(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_DOCTOR:
      return {
        ...state,
        doctor:[...payload]
      }
    case ADD_DOCTOR:
      return {
        ...state,
        doctor: [...state.doctor,payload],   
      };

    case Update_doctor:
        console.log(payload)
        const updateddoctors= state.doctor.map(d=>{
            if(d.id===payload.id){
                console.log('hi')
                return {
                    ...d,
                    ...payload
                 };
                }
                console.log('doctor not found')
                return d;
            });
            console.log(state.doctor)
        return {
            ...state,
           doctor:updateddoctors
        }

    case Delete_Doctor:
        return {
            ...state,
            doctor: state.doctor.filter((d,index)=>d.id !==payload)
        }

    default:
      return state;
  }
}