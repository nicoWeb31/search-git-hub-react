import React, { useReducer } from 'react';
import Axios from 'axios';
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";

import {

    SET_ALERT,
    REMOVE_ALERT

} from "../types"


const AlertState = porps => {
    const initialState = null;


    const [state, dispatch] = useReducer(AlertReducer, initialState);

    //setAlert 
    //set Alert 
    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload:{msg,type}
        })

        setTimeout(() => dispatch({type: REMOVE_ALERT}), 5000)

    }



    return <AlertContext.Provider
        value={{
            alert: state,
            setAlert

        }}
    >

        {porps.children}

    </AlertContext.Provider>
}

export default AlertState