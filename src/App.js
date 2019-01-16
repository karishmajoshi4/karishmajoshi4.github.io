import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "./components/Home.jsx";
import About from "./components/About.jsx"
import Work from "./components/Work.jsx"

import "./styles/custom.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/work' component={Work} />
          <Route component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
