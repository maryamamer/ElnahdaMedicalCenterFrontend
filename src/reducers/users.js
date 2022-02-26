/* eslint-disable import/no-anonymous-default-export */

import {
   ADD_USER,
   UPDATE_USER,
   REMOVE_USER,
   PARTIAL_UPDATE_USER,
   GET_PATIENT
} from '../actions/types';

const initialState = {
    users: [],
    isdoctor:null
};

export default function user (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PATIENT:

            return {
                ...state,
                users:payload
            }
        case ADD_USER:
            // payload.map((user)=>{
            //     if(user.is_staff==true){
            //         return{
            //             ...state,
            //             users:[...state.users,payload],
            //             isdoctor:true
            //         }
            //     }
            // })
            return {
                ...state,
                users:[...state.users,payload]
            }
        case UPDATE_USER:
            console.log(payload)
            const updatedusers= state.users.map(user=>{
                if(user.id===payload.id){
                    console.log('hi')
                    return {
                        ...user,
                        ...payload
                     };
                    }
                    console.log('user not found')
                    return user;
                });
                console.log(state.users)
            return {
                ...state,
               users:updatedusers
            }

        case REMOVE_USER:
            return {
                ...state,
                users: state.users.filter((user,index)=>user.id !==payload)
            }

        default:
            return state
    }
};