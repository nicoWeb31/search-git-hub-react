import {
    SEARCH_USERS,
    SET_ALERT,
    CLEAR_USERS,
    GET_USERS,
    GET_REPOS,
    SET_LOADING
} from "../types"


export default (state,action) =>{
    switch(action.type) {

    case SEARCH_USERS:
        return {
            ...state,
            users: action.payload,
            loading: false
        }    

    case SET_LOADING:
        return {
            ...state,
            loading:true
        }    

    default:
        return state;    
    }
}