import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from '../src/component/layout/Navbar/NavBar';
import './App.css';
import Alert from './component/layout/alert/Alert';
import About from './component/pages/About';
import Search from './component/search/Seaerch';
import Use from './component/users/Use';
import User from './component/users/User';
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";




const App = () => {

  return (
    <AlertState>

      <GithubState>
        <BrowserRouter>

          <div className="App">
            <NavBar
              title="Github finder"
              icon="fab fa-github"
            />
            <Alert />
            <Switch>
              <Route exact path="/" render={props => (

                <>
                  <div className="container">
                    <Search />
                    <User />
                  </div>
                </>
              )} />

              <Route exact path='/about' component={About} />

              <Route exact path='/user/:login' component={Use} />

            </Switch>

          </div>

        </BrowserRouter>

      </GithubState>
    </AlertState>
  );
}




export default App;
