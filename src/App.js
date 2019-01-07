import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import NavBar from './layouts/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route
            render={({ location }) => {
              return (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={300}
                  >
                    <Route
                      location={location}
                      render={() => (
                        <Switch>
                          <Route exact path="/" component={Home} />
                          <Route path="/about" component={About} />
                        </Switch>
                      )}
                    />
                  </CSSTransition>
                </TransitionGroup>
              );
            }}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
