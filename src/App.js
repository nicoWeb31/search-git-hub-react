import React from 'react';
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

import GithubState from "./context/github/GithubState"

const App = () => {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)
  const [user, setuser] = useState({})
  const [repos, setRepos] = useState([])



  //get users 
  const searchUser = async (text) => {

    setLoading(true)

    await Axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then((response) => {
      setUsers(response.data.items)
    })
    setLoading(false)
  }


  //clear search
  const clearSearchUser = () => {
    setUsers([]);
    setLoading(false)
  }

  //get single Github user 
  const getUser = async (username) => {
    setLoading(true)

    await Axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then((response) => {
      setuser(response.data)
    })

    setLoading(false)

  }

  //get user repos
  const getUserRepos = async (username) => {
    setLoading(true)


    await Axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then((response) => {
      setRepos(response.data)
    })

    setLoading(false)
  }



  //set Alert 
  const AlertMessage = (msg, type) => {
    setAlert({ msg, type })

    setTimeout(() => setAlert(null), 5000)
    console.log(alert)
  }



  return (
    <GithubState>



      <BrowserRouter>

        <div className="App">
          <NavBar
            title="Github finder"
            icon="fab fa-github"
          />
          <Alert alert={alert} />
          <Switch>
            <Route exact path="/" render={props => (

              <>
                <div className="container">
                  <Search
                    
                    clearSearch={clearSearchUser}
                    showClear={users.length > 0 ? true : false}
                    setAlert={AlertMessage}
                  />
                  <User loading={loading} users={users} />
                </div>
              </>
            )} />

            <Route exact path='/about' component={About} />

            <Route exact path='/user/:login' render={props => (
              <Use {...props} getUser={getUser} user={user} loading={loading} getUserRepos={getUserRepos} repos={repos} />
            )} />



          </Switch>





        </div>

      </BrowserRouter>

    </GithubState>
  );
}




export default App;
