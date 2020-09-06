import React, { useReducer } from 'react';
import Axios from 'axios';
import GithubContext from "./GithubContext";
import githubReducer from "./githubeReducer";

import {
    SEARCH_USERS,
    CLEAR_USERS,
    GET_USER,
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

    }

    //get user

    const getUser = async (username) => {
        setLoading()

        await Axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then((response) => {
            dispatch({
                type: GET_USER,
                payload: response.data
            });
        })



    }

    //get user repos
    const getUserRepos = async (username) => {
        setLoading()
        await Axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then((response) => {

            dispatch({
                type:GET_REPOS,
                payload: response.data
            })
        })

        
    }


    //clear user
    const clearSearchUser = () => {
        dispatch({ type: CLEAR_USERS })
    }
    //setLoading


    const setLoading = () => dispatch({ type: SET_LOADING })


    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            clearSearchUser,
            searchUser,
            getUser,
            getUserRepos
        }}
    >

        {porps.children}

    </GithubContext.Provider>
}

export default GithubState