import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './Main/reducer';
import Main from './Main';
import Header from './Header';

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

const store = createStore(reducer, applyMiddleware(thunk));

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/1" />
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
          <Route path="/:id" component={Main} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </Provider>
);
