import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import NavBar from './layouts/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <Home /> */}
        {/* <About /> */}
      </div>
    );
  }
}

export default App;
