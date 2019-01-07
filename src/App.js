import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import NavBar from './layouts/NavBar';
import { Router } from 'react-router';
// import

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          {/* <Home /> */}
          {/* <About /> */}
        </div>
      </Router>
    );
  }
}

export default App;
