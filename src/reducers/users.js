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
    isdoctor:null,
    updated:null
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
            console.log(payload)
            state.users.map((user)=>{
                if(user.is_staff==true){
                    return{
                        ...state,
                        isdoctor:true
                    }
                }
                return {
                    ...state,
                    isdoctor:false
                }
            })
            return {
                ...state,
                users:[...state.users,payload],
            }
            
        case UPDATE_USER:
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
            return {
                ...state,
               users:updatedusers,
               updated:true
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