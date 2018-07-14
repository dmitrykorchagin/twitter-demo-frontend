import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Follower = styled.li``;

const Link = styled(NavLink)`
  padding-right: 5px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export default ({ to, avatar }: { to: string, avatar: string }) => (
  <Follower>
    <Link exact to={to}>
      <Avatar src={avatar} />
    </Link>
  </Follower>
);
