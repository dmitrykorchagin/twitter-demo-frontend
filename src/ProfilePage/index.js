import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Main from "./Main";

export default () => {
  return (
    <div>
      <Helmet>
        <title>Profile Page</title>
      </Helmet>
      <Header />
      <Main />
    </div>
  );
};
