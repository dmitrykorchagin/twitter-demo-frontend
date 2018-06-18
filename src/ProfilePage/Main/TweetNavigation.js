import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavigationList = styled.ul`
  display: flex;
  padding: 0;

  background: #fff;
  margin: 0;
  list-style: none;
`;

const Navigation = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
`;

const NavigationLink = styled(NavLink)`
  display: flex;
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
  margin-right: 15px;
  padding-top: 15px;
  padding-bottom: 10px;

  color: ${props =>
    props.activeClassName === "selected" ? "#14171a" : "#1da1f2"};
  &:hover {
    text-decoration: ${props =>
      props.activeClassName === "selected" ? "none" : "underline"};
  }
`;

export default () => {
  return (
    <NavigationList>
      <Navigation>
        <NavigationLink exact to="/EveryInteract" activeClassName="selected">
          Tweets
        </NavigationLink>
      </Navigation>
      <Navigation>
        <NavigationLink exact to="/EveryInteract/with_replies">
          Tweets & replies
        </NavigationLink>
      </Navigation>
      <Navigation>
        <NavigationLink exact to="/EveryInteract/media">
          Media
        </NavigationLink>
      </Navigation>
    </NavigationList>
  );
};
