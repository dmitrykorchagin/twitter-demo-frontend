import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header/Header";
import Content from "./Main/Сontent";

export default () => {
  return (
    <div>
      <Helmet>
        <title>Profile Page</title>
      </Helmet>
      <Header />
      <Content />
    </div>
  );
};
