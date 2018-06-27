import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import Helmet from 'react-helmet';
import Main from './ProfilePage/Main';
import Header from './ProfilePage/Header/Navigation';

const Moments = ({ location }) => (
  <React.Fragment>
    <Helmet>
      <title>
        {location.pathname}
      </title>
    </Helmet>
    <h1>
      {`${location.pathname}`}
    </h1>
  </React.Fragment>
);

export default () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Redirect exact from="/" to="/EveryInteract" />
        <Route path="/moments" component={Moments} />
        <Route path="/notifications" component={Moments} />
        <Route path="/messages" component={Moments} />
        <Route path="/:user" component={Main} />
      </Switch>
    </div>
  </BrowserRouter>
);
