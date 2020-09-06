import React, { useEffect } from 'react';
import Spinner from "../spinner/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos"

const Use = ({match, user,loading,getUser,getUserRepos,repos}) => {

    const styleAvart ={
        width: '150px'
    }

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login)
    }, [])
    console.log("repos",repos)

    const {name, avatar_url,location,bio,blog,login,html_url,public_repos,public_gists,hireable,company,followers,following} = user;


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
                <p>{location}</p>
            </div>
        <div>
            {bio && (
            <>
                <h3>Bio</h3>
                <p>{bio}</p>
            </>
            )
            }
            <a href={html_url} className="btn btn-dark my-1">Visit Github profile</a>
            <ul>
                <li>
                    {login && (
                        <>
                        <strong>Username :</strong> {login}
                        </>
                    )}
                </li>
                <li>
                    {company && (
                        <>
                        <strong>Company :</strong> {company}
                        </>
                    )}
                </li>
                <li>
                    {blog && (
                        <>
                        <strong>Website :</strong> {blog}
                        </>
                    )}
                </li>
            </ul>

        </div>
        </div>
        <div className="card text-center">
            <div className="badge badge-primary">
                Followers : {followers}
            </div>
            <div className="badge badge-success">
                Following : {following}
            </div>
            <div className="badge badge-light">
                Public Respos : {public_repos}
            </div>
            <div className="badge badge-dark">
                Public Gists : {public_gists}
            </div>
        </div>

        <Repos repositprory={repos}/>
        </>


    );
}

Use.propTypes = {
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired
    
}
export default Use;