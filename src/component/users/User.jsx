import React, { useContext } from 'react';
import GithubContext from "../../context/github/GithubContext";
import Spinner from '../spinner/Spinner';
import UserItems from "./UserItems";


const User = (props) => {

    const gitContext = useContext(GithubContext) 

  

    const userStyle = {
        display:'grid',
        gridTemplateColumns : 'repeat(3, 1fr)',
        gridGap: '1rem'
    
    }

    return (
        <div style={userStyle}>
        {
            gitContext.loading ? 
            (
                <Spinner/>
            ):
            (

                gitContext.users.map(u =>(
                <UserItems avatar_url={u.avatar_url} login={u.login}  html_url={u.html_url} key={u.id} user={u}
                
                />
            ))
            )
        }        

        </div>
    );

}




export default User;