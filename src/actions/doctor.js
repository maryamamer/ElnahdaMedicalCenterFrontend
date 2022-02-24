import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { FaAccessibleIcon } from 'react-icons/fa';
import {
    GET_DOCTOR,
} from './types';
import jwtDecode from 'jwt-decode';

export const get_doctor = () => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    }
    return axios.get('/doctors',config)
        .then((res) =>
            dispatch({
                type: GET_DOCTOR,
                payload:res.data,

            })
        )
        .catch((err) => {
            console.log(err)
        })

}
