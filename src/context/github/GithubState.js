import React, { useReducer } from 'react';
import Axios from 'axios';
import GithubContext from "./GithubContext";
import githubReducer from "./githubeReducer";

import {
    SEARCH_USERS,
    SET_ALERT,
    CLEAR_USERS,
    GET_USERS,
    GET_REPOS,
    SET_LOADING
} from "../types"


const GithubState = porps => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }


    const [state, dispatch] = useReducer(githubReducer, initialState);

    //search users

    const searchUser = async (text) => {

        setLoading()

        await Axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then((response) => {

            dispatch({
                type: SEARCH_USERS,
                payload: response.data.items
            })
        })
        //setLoading(false)
    }

    //get user

    //get repos

    //clear user

    //setLoading


    const setLoading = () => dispatch({ type: SET_LOADING })


    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUser
        }}
    >

        {porps.children}

    </GithubContext.Provider>
}

export default GithubState