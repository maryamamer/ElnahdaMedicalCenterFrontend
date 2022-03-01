import axios from "axios";
import login from "./auth";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaAccessibleIcon } from "react-icons/fa";
import { load_user } from "./auth";
import { ADD_USER, UPDATE_USER, GET_PATIENT, REMOVE_USER,UserUpdate_Fail } from "./types";
import jwtDecode from "jwt-decode";

export const add_user = (user, username, password, email, repassword) => async (
  dispatch
) => {
  console.log(email);
  const config1 = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const config2 = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = {
    email: email,
    username: username,
    password: password,
    re_password: repassword,
  };
  console.log(body);
  try {
    await axios.post(`/users/`, user, config1).then((res) => {
      dispatch({
        type: ADD_USER,
        payload: res.data,
      });
    });
  } catch (err) {
    console.log(err);
  }

  // axios
  //   .post(`/auth/users/`, body,config1)
  //   .then((res) => console.log(res.data))
  //   .catch((err) => console.log(err))
};

export const updateuser = (id, user) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = {
    is_superuser: user.is_superuser,
    username: user.username,
    email: user.email,
    fullname: user.fullname,
    phone: user.phone,
    date_of_birth: user.date_of_birth,
    address: user.address,
    age: user.age,
    image: user.image,
    gender: user.gender,
  };
  return axios
    .patch(`/users/${id}/`, body)
    .then((res) => {
      dispatch({
        type: UPDATE_USER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
export const getuser = () => async (dispatch) => {
  return axios
    .get(`/users/`)
    .then((res) =>
      dispatch({
        type: GET_PATIENT,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const deleteuser = (id) => async (dispatch) => {
  return axios
    .delete(`/users/${id}`)
    .then((res) =>
      dispatch({
        type: REMOVE_USER,
        payload: id,
      })
    )
    .catch((err) => console.log(err));
};

export const updateuserprofile = (user, id) => async (dispatch) => {
  const config = {
    validateStatus: (status) => {
      // handling our own errors less than 500 status
      return status < 500;
    },
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = {
    fullname: user.fullname,
    email: user.email,
    phone: user.phone,
    address: user.address,
  };
  console.log(body);
  return axios
    .patch(`/Userprofile/${id}/`, body, config)
    .then((res) => {
      if (res.status === 400) {
        dispatch({
          type:UserUpdate_Fail,
          payload:res.data
        })
      } else {
        dispatch({
          type: UPDATE_USER,
          payload: res.data,
        });
      }
    })
    .catch((err) => console.log(err));
};
