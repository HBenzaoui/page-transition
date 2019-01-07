import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import NavBar from './layouts/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
