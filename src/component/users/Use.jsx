import React, { useEffect } from 'react';
import Spinner from "../spinner/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"

const Use = ({match, user,loading,getUser}) => {

    const styleAvart ={
        width: '150px'
    }

    useEffect(() => {
        getUser(match.params.login)
    }, [])


    const {name, avatar_url,location,bio,blog,login,html_url,public_repos,public_gists,hireable} = user;


    if(loading)return <Spinner/>;

    return (

        

        <>
        <Link to="/" className="btn btn-light">Back to search</Link>
        Hireable: {''}
        {
            hireable ? <i className='fas fa-check text-success'/> : <i className='fas fa-times-circle text-danger'/>
        }
        <div className="card grid-2">
            <div className="all-center">
                <img src={avatar_url} alt="avatar...." className="round-img" style={styleAvart}/>
                <h1>{name}</h1>
            </div>
        </div>


        </>


    );
}

Use.propTypes = {
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Use;