import React from 'react';
import { useState } from 'react';
import UserItems from "./UserItems";
import Spinner from '../spinner/Spinner';
import PropTypes from "prop-types"


const User = ({loading, users}) => {

  

    const userStyle = {
        display:'grid',
        gridTemplateColumns : 'repeat(3, 1fr)',
        gridGap: '1rem'
    
    }

    return (
        <div style={userStyle}>
        {
            loading ? 
            (
                <Spinner/>
            ):
            (

                users.map(u =>(
                <UserItems avatar_url={u.avatar_url} login={u.login}  html_url={u.html_url} key={u.id} user={u}
                
                />
            ))
            )
        }        

        </div>
    );

}

User.prototype= {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired

}


export default User;