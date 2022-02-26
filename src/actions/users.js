import axios from "axios";
import login from "./auth";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaAccessibleIcon } from "react-icons/fa";
import {
    UPDATE_USER,
    GET_PATIENT,
     ADD_USER

} from "./types";
import jwtDecode from "jwt-decode";


export const add_user = (user) => async (dispatch) => {
    
  console.log(user)
  
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify(user)
    return axios
      .post(`/users/`, user,config)
      .then((res) => dispatch({
        type: "ADD_USER",
        payload: res.data,
      })
  
      )
      .catch((err) => console.log(err))
  }

export const updateuser = (id, user) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        
        }
    };
    const body = {
       is_superuser:user.is_superuser,
       username:user.username,
       email:user.email,
       fullname:user.fullname,
       phone:user.phone,
       date_of_birth:user.date_of_birth,
       address:user.address,
       age:user.age,
       image:user.image,
       gender:user.gender,
       
    }
    return axios
    .patch(`/users/${id}/`,body)
    .then((res)=>{   
     dispatch({
        type:UPDATE_USER,
        payload:res.data
    })})
    .catch(err=>console.log(err))

}
export const getuser = () => async (dispatch) => {
   return axios
    .get(`/users/`,)
    .then((res)=>dispatch({
        type:GET_PATIENT,
        payload:res.data
    }))
    .catch(err=>console.log(err))


}
