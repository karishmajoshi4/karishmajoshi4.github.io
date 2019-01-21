import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Home from "./components/Home.jsx";
import About from "./components/About.jsx"
import Work from "./components/Work.jsx";
import Sketchpressions from './components/Sketchpressions.jsx';

import "./styles/Custom.scss";
library.add(fab, fas);

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/work' component={Work} />
          <Route exact path='/sketchpressions' component={Sketchpressions} />
          <Route component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
