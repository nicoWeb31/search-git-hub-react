import React from 'react';
import { useState } from 'react';
import UserItems from "./UserItems"

const User = () => {

    const [users,setUsers] = useState([
        {
            id:'1',
            login:'mojombo',
            avatar_url:'https://avatars0.githubusercontent.com/u/1?v=4',
            html_url:'https://github.com/mojombo'
        },
        {
            id:'2',
            login:'mojombo',
            avatar_url:'https://avatars0.githubusercontent.com/u/2?v=4',
            html_url:'https://github.com/mojombo'
        },
        {
            id:'3',
            login:'mojombo',
            avatar_url:'https://avatars0.githubusercontent.com/u/3?v=4',
            html_url:'https://github.com/mojombo'
        }

    ])

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