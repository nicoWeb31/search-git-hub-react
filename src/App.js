import React, { useEffect } from 'react';
import NavBar from '../src/component/layout/Navbar/NavBar';
import User from './component/users/User';

import './App.css';
import { useState } from 'react';
import Axios from 'axios';

const App = ()=>{

  const [users,setUsers]= useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    setLoading(true)
    const data = fetchUser();
    setUsers(data)
    console.log(data)
    setLoading(false)

  },[])   
  
  const fetchUser = () =>{
    return Axios.get("https://api.github.com/users");
  }



    return (
      <div className="App">
        <NavBar
          title="Github finder"
          icon="fab fa-github"
        />

        <div className="container">
          <User loading={loading} usersProps={users}/>

        </div>

      </div>
    );
  }
  



export default App;
