import React, { useEffect } from 'react';
import NavBar from '../src/component/layout/Navbar/NavBar';
import User from './component/users/User';
import Use from './component/users/Use';
import Search from './component/search/Seaerch';
import Alert from './component/layout/alert/Alert';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './component/pages/About'

import './App.css';
import { useState } from 'react';
import Axios from 'axios';

const App = () => {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)
  const [user, setuser] = useState({})
  const [repos, setRepos] =useState([])


  const searchUser = (text) => {

    setLoading(true)
    console.log("toto", text)
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

  const clearSearchUser = () => {
    setUsers([]);
    setLoading(false)
  }

  //get single Github user 
  const getUser =(username)=>{
    setLoading(true)
    
    async function fetchDat() {
      await Axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then((response) => {
        setuser(response.data)
        setLoading(false)
        console.log(response)
      })
    }
    fetchDat()
  }

  //get user repos
  const getUserRepos =(username)=>{
    setLoading(true)
    
    async function fetchDat() {
      await Axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then((response) => {
        setRepos(response.data)
        setLoading(false)
        console.log(response)
      })
    }
    fetchDat()
  }
  



  //set Alert 
  const AlertMessage = (msg, type) => {
    setAlert({ msg, type })

    setTimeout(() => setAlert(null), 5000)
    console.log(alert)
  }



  return (
    <BrowserRouter>

    <div className="App">
      <NavBar
        title="Github finder"
        icon="fab fa-github"
      />
      <Alert alert={alert} />
      <Switch>
        <Route exact path="/" render={props =>(

          <>
            <div className="container">
              <Search
                searchUsers={searchUser}
                clearSearch={clearSearchUser}
                showClear={users.length > 0 ? true : false}
                setAlert={AlertMessage}
              />
              <User loading={loading} users={users} />
            </div>
          </>
        )} />

        <Route exact path='/about' component={About}/>

        <Route exact path='/user/:login' render={props=>(
          <Use {...props} getUser={getUser} user={user} loading={loading} getUserRepos={getUserRepos} repos={repos}/>
        )} />



      </Switch>





    </div>

    </BrowserRouter>
  );
}




export default App;
