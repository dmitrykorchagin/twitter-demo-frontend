import React, { Component } from "react";
import ProfilePage from "./ProfilePage";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Redirect from="/" to="/EveryInteract" />
          <Route exact path="/EveryInteract" component={ProfilePage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
