import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getYear } from 'date-fns';

const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  flex-wrap: wrap;
  align-items: center;
`;

const Navigation = styled.li`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

const Year = styled.span`
  font-size: 13px;
  color: #718290;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #718290;
  font-size: 13px;

  &:hover {
    color: #1da1f2;
    text-decoration: underline;
  }
`;

export default () => (
  <List>
    <Navigation>
      <Year>
        ©
        {getYear(new Date())}
        Twitter
      </Year>
    </Navigation>
    <Navigation>
      <NavLink exact to="/about">
        About
      </NavLink>
    </Navigation>
    <Navigation>
      <NavLink exact to="/support">
        Help Center
      </NavLink>
    </Navigation>
    <Navigation>
      <NavLink exact to="/terms">
        Terms
      </NavLink>
    </Navigation>
    <Navigation>
      <NavLink exact to="/privacy">
        Privacy policy
      </NavLink>
    </Navigation>
    <Navigation>
      <NavLink exact to="/cookies">
        Cookies
      </NavLink>
    </Navigation>
    <Navigation>
      <NavLink exact to="/adsinfo">
        Ads info
      </NavLink>
    </Navigation>
  </List>
);
