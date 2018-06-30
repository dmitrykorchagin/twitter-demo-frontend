import React from 'react';
import styled from 'styled-components';
import Follower from './Follower';
import SidebarHeading from '../SidebarHeading';
import followersIcon from '../img/followers.svg';

const Followers = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 8px;
`;

export default ({ data, user }) => (
  <Followers>
    <SidebarHeading icon={followersIcon} to={`/${user}/followers_you_follow`}>
      6 Followers you know
    </SidebarHeading>
    <List>
      {data.map(follower => <Follower to={follower.to} avatar={follower.avatar} />)}
    </List>
  </Followers>
);
