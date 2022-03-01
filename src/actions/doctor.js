import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { FaAccessibleIcon } from "react-icons/fa";
import { GET_DOCTOR, ADD_DOCTOR, Update_doctor, Delete_Doctor ,Doctor_fail} from "./types";
import jwtDecode from "jwt-decode";
import { DownCircleFilled } from "@ant-design/icons";

export const get_doctor = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  return axios
    .get("/doctors", config)
    .then((res) =>
      dispatch({
        type: GET_DOCTOR,
        payload: res.data,
      })
    )
    .catch((err) => {
      console.log(err);
    });
};

export const add_doctor = (doctor) => async (dispatch) => {
  console.log(doctor.get("email"));
  const config = {
    validateStatus: (status) => {
      // handling our own errors less than 500 status
      return status < 500;
    },
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return axios
    .post(`/doctors/`, doctor, config)
    .then((res) => {

        if(res.status===400){
        dispatch({
            type:Doctor_fail,
            payload:res.data
        })
        }
        else{
            dispatch({
                type: ADD_DOCTOR,
                payload: res.data,
              });
        }
      
    })
    .catch((message) => console.log("err", message));
};

export const update_doctor = (id, doctor) => async (dispatch) => {
  console.log(doctor);
  const body = {
    experience: doctor.experience,
    username: doctor.username,
    password: doctor.password,
    fullname: doctor.fullname,
    email: doctor.email,
    phone: doctor.phone,
    date_of_birth: doctor.date_of_birth,
    address: doctor.address,
    image: doctor.image,
    price: doctor.price,
    age: doctor.age,
    gender: doctor.gender,
    education_degree: doctor.education_degree,
    specialization: doctor.specialization,
    achievements: doctor.achievements,
    status: doctor.status,
    is_superuser: doctor.is_superuser,
    patient_number: doctor.patient_number,
    dept_id: doctor.dept_id,
  };
  return axios
    .patch(`/doctors/${id}/`, body)
    .then((res) => {
      dispatch({
        type: Update_doctor,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const delete_doctor = (id) => async (dispatch) => {
  return axios
    .delete(`/doctors/${id}`)
    .then((res) =>
      dispatch({
        type: Delete_Doctor,
        payload: id,
      })
    )
    .catch((err) => console.log(err));
};
