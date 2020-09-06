import React, { useReducer } from 'react';
import Axios from 'axios';
import GithubContext from "./GithubContext";
import githubReducer from "./githubeReducer";

import {
    SEARCH_USERS,
    SET_ALERT,
    CLEAR_USERS,
    GET_USERS,
    GET_REPOS
} from "../types"


const GithubState = porps =>{
    const initialState  = {
        users :[],
        user:{},
        repos:[],
        loading: false
    }


    const [state, dispatch] = useReducer(githubReducer, initialState);

    //search users

    //get user

    //get repos

    //clear user

    //setLoading


    return <GithubContext.Provider 
    value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading
    }}
    >

    {porps.children}

    </GithubContext.Provider>
}

export default GithubState