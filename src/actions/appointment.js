import axios from "axios";
import login from "./auth";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaAccessibleIcon } from "react-icons/fa";
import {
  ADD_APPOINTMENT,
  REM_APPOINTMENT,
  ADD_Patient_APPOINTMENT,
  ADDED_APP
} from "./types";
import jwtDecode from "jwt-decode";

export const add_appointment = (date, message) => async (dispatch) => {
  // const { params }= matchPath(window.location.pathname, {
  //     path: "http://localhost:3000/booking/1"
  //  })
  //  console.log(params.id)

  const token = localStorage.getItem("access");
  const user = jwtDecode(token).user_id;
  console.log(user)


  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    date: date,
    message: message,
    patient_id: user,
    doctor_id: window.location.pathname.split('/')[2]
  })
  return axios
    .post(`/Appointments/`, body, config)
    .then((res) => dispatch({
      type: "ADD_APPOINTMENT",
      payload: res.data,
    })

    )
    .catch((err) => console.log(err))
}

export const registered = () => async dispatch => {

  const token = localStorage.getItem("access");
  const user = jwtDecode(token).user_id;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${localStorage.getItem("access")}`,
      Accept: "application/json",
    },
  };
  return axios
    .get(`/Appointments`)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: "ADDED_APP",
          payload:JSON.stringify(res.data.filter((r)=>r.patient_id===user)),
        })
      }
    })
    //   .then((res) => dispatch({
    //       type:"ADD_APPOINTMENT",
    //       payload:res.data,
    //   })
    .catch((err) => console.log(err))
};
//   const params = useParams();
//   const body = JSON.stringify({
//     date: date,
//     message: message,
//     patient_id:4,
//     doctor_id: 3
//   });
//   try {
//     const res = await axios.post(`/Appointments/`, body, config);
//     dispatch({
//       type: ADD_APPOINTMENT,
//       payload: res.data,
//     });
//     console.log(res.data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const add_patient_appointment = () => async (dispatch) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `JWT ${localStorage.getItem("access")}`,
//       Accept: "application/json",
//     },
//   };

//   const body = JSON.stringify({
//     patient_id: jwtDecode(localStorage.getItem("access")).user_id,
//   });

//   try {
//     const res = await axios.post(`/PatientAppointments/`, body, config);

//     dispatch({
//       type: ADD_Patient_APPOINTMENT,
//       payload: res.data,
//     });
//     console.log(res.data);
//   } catch (err) {
//     console.log(err);
//   }
// }


export const remAppointment = () => async dispatch => {
  const app_id=localStorage.getItem('appointment')
  console.log(app_id)
  return axios
    .delete(`/Appointments/${app_id}`)
    .then((res) => dispatch({
      type: "REM_APPOINTMENT",
      payload: res.data,
    })
    )
    .catch((err) => console.log(err))
};