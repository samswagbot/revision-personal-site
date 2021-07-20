import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import { HomePage, ResumePage, Talks, Portfolio } from 'Pages/pages';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/resume">
        <ResumePage />
      </Route>
      <Route path="/talksandcampaigns">
        <Talks />
      </Route>
      <Route path="/portfoilo">
        <Portfolio />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
