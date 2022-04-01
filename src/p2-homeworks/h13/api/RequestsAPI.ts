import React from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";

const instance = axios.create({
        baseURL: `https://neko-cafe-back.herokuapp.com/auth/test`,
    }
)



export const RequestsApi = {


    post(value: boolean) {


        return instance.post(``,{success: value})
         },

}

export default RequestsApi;