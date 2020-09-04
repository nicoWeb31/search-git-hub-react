import React, { useEffect } from 'react';

const Use = (props) => {

    useEffect(() => {
        props.getUser(props.match.params.login)
    }, [])


    const {name, avatar_url,location,bio,blog,login,html_url,public_repos,public_gists,hireable} = props.user
    return (

        <div>
        <h1>{name}</h1>
        </div>


    );
}

export default Use;