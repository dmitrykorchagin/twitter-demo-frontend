import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const Footer = styled.footer`
  display: flex;
  margin-top: 23px;
`;

export default () => (
  <Footer>
    <Navigation />
  </Footer>
);
