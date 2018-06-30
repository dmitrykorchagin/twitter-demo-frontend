import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const List = styled.ul`
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

const Link = styled(NavLink)`
  display: flex;
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
  margin-right: 15px;
  padding-top: 15px;
  padding-bottom: 10px;
  color: #1da1f2;

  &.active {
    color: #14171a;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export default ({ user }) => (
  <List>
    <Navigation>
      <Link exact to={`/${user}`}>
        Tweets
      </Link>
    </Navigation>
    <Navigation>
      <Link exact to={`/${user}/with_replies`}>
        Tweets & replies
      </Link>
    </Navigation>
    <Navigation>
      <Link exact to={`/${user}/media`}>
        Media
      </Link>
    </Navigation>
  </List>
);
