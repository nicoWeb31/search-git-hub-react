import React, { useEffect } from 'react';
import NavBar from '../src/component/layout/Navbar/NavBar';
import User from './component/users/User';
import Search from './component/search/Seaerch';


import './App.css';
import { useState } from 'react';
import Axios from 'axios';

const App = () => {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  // useEffect(() => {

  //   setLoading(true)
  //   async function fetchData() {
  //     await Axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
  //     &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then((response) => {
  //       setUsers(response.data)
  //     })
  //   }
  //   fetchData()
  //   setLoading(false)
  //   console.log(users)

  // }, [])


  const searchUser = (text) =>{

    setLoading(true)
    console.log("toto",text)
    async function fetchDat() {
      await Axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then((response) => {
        setUsers(response.data.items)
        setLoading(false)
        console.log(response)
      })
    }
    fetchDat()

  }



  return (
    <div className="App">
      <NavBar
        title="Github finder"
        icon="fab fa-github"
      />

      <Search searchUsers={searchUser} />
      <div className="container">
        <User loading={loading} users={users} />

      </div>

    </div>
  );
}




export default App;
