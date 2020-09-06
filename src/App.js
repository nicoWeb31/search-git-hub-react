import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from '../src/component/layout/Navbar/NavBar';
import './App.css';
import Alert from './component/layout/alert/Alert';
import About from './component/pages/About';
import Home from './component/pages/Home';
import NotFound from './component/pages/NotFound';
import Use from './component/users/Use';
import AlertState from "./context/alert/AlertState";
import GithubState from "./context/github/GithubState";




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
              <Route exact path="/" component={Home}/>

              <Route exact path='/about' component={About} />

              <Route exact path='/user/:login' component={Use} />

              <Route component={NotFound} />


            </Switch>

          </div>

        </BrowserRouter>

      </GithubState>
    </AlertState>
  );
}




export default App;
