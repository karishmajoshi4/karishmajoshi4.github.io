import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Loadable from 'react-loadable';
import Loading from './components/Loading.jsx';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import "./styles/Custom.scss";

const LoadableHome = Loadable({ loader: () => import('./components/Home.jsx'), loading: Loading});
const LoadableAbout = Loadable({loader: () => import('./components/About.jsx'), loading: Loading});
const LoadableWork = Loadable({loader: () => import('./components/Work.jsx'), loading: Loading});
const LoadableSketchpressions = Loadable({loader: () => import('./components/Sketchpressions.jsx'), loading: Loading});

library.add(fab, fas);

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="container-fluid">
          <Switch>
            <Route exact path={'/'} component={LoadableHome} />
            <Route path={'/home'} component={LoadableHome} />
            <Route path={'/about'} component={LoadableAbout} />
            <Route path={'/work'} component={LoadableWork} />
            <Route path={'/sketchpressions'} component={LoadableSketchpressions} />

            <Route component={LoadableHome} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
