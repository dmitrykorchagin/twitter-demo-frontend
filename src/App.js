import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import ProfilePage from './ProfilePage';

const App = () => (
  <BrowserRouter>
    <div>
      <Redirect from="/" to="/EveryInteract" />
      <Route exact path="/EveryInteract" component={ProfilePage} />
    </div>
  </BrowserRouter>
);

export default App;
