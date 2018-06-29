import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import Helmet from 'react-helmet';
import Main from './ProfilePage/Main';
import Header from './ProfilePage/Header/Navigation';

const Temporary = ({ location }) => (
  <React.Fragment>
    <Helmet>
      <title>
        {location.pathname}
      </title>
    </Helmet>
    <h1>
      {location.pathname}
    </h1>
  </React.Fragment>
);

export default () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Redirect exact from="/" to="/EveryInteract" />
        <Route path="/moments" component={Temporary} />
        <Route path="/notifications" component={Temporary} />
        <Route path="/messages" component={Temporary} />
        <Route exact path="/about" component={Temporary} />
        <Route exact path="/support" component={Temporary} />
        <Route exact path="/terms" component={Temporary} />
        <Route exact path="/privacy" component={Temporary} />
        <Route exact path="/cookies" component={Temporary} />
        <Route exact path="/adsinfo" component={Temporary} />
        <Route exact path="/search" component={Temporary} />
        <Route path="/:user" component={Main} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);
