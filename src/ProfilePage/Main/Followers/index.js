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

const followers = [
  {
    to: '/follower1',
    avatar: `${process.env.PUBLIC_URL}/img/avatar-1.jpg`,
  },
  {
    to: '/follower2',
    avatar: `${process.env.PUBLIC_URL}/img/avatar-2.jpg`,
  },
  {
    to: '/follower3',
    avatar: `${process.env.PUBLIC_URL}/img/avatar-3.jpg`,
  },
  {
    to: '/follower4',
    avatar: `${process.env.PUBLIC_URL}/img/avatar-4.jpg`,
  },
  {
    to: '/follower5',
    avatar: `${process.env.PUBLIC_URL}/img/avatar-5.jpg`,
  },
  {
    to: '/follower6',
    avatar: `${process.env.PUBLIC_URL}/img/avatar-6.jpg`,
  },
];

export default ({ uid }) => (
  <Followers>
    <SidebarHeading icon={followersIcon} to={`/${uid}/followers_you_follow`}>
      6 Followers you know
    </SidebarHeading>
    <List>
      {followers.map(follower => <Follower to={follower.to} avatar={follower.avatar} />)}
    </List>
  </Followers>
);
