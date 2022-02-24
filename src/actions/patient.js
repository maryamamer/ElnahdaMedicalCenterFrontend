import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { FaAccessibleIcon } from 'react-icons/fa';
import {
    GET_PATIENT,
} from './types';
import jwtDecode from 'jwt-decode';

export const get_patient = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    }
    await axios.get('/users/', config)
        .then((res) =>
            dispatch({
                type: GET_PATIENT,
                payload: res.data,

            })
        )
        .catch((err) => {
            console.log(err)
        })

}
