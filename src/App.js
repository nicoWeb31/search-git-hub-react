import React from 'react';
import NavBar from '../src/component/layout/Navbar/NavBar';
import User from './component/users/User'

import './App.css';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className="App">
        <NavBar
          title="Github finder"
          icon="fab fa-github"
        />

        <div className="container">
          <User />

        </div>

      </div>
    );
  }


}

export default App;
