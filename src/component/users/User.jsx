import React from 'react';
import { useState } from 'react';
import UserItems from "./UserItems"

const User = ({loading, usersProps}) => {

    const [users,setUsers] = useState()

    const userStyle = {
        display:'grid',
        gridTemplateColumns : 'repeat(3, 1fr)',
        gridGap: '1rem'
    
    }

    return (
        <div style={userStyle}>
        {
            users.map(u =>(
                <UserItems avatar_url={u.avatar_url} login={u.login}  html_url={u.html_url} key={u.id} user={u}
                
                />
            ))
        }        

        </div>
    );

}


export default User;