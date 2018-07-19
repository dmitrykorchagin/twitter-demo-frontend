import React from 'react';
import styled from 'styled-components';
import RecommendFollowers from './RecommendFollowers';
import SidebarHeading from '../SidebarHeading';
import peopleIcon from '../img/people.svg';

const WhoToFollow = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 15px;
  margin-top: 10px;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #14171a;
  margin: 0;
  margin-right: 5px;
`;

const Button = styled.button`
  color: #1da1f2;
  font-size: 12px;
  padding: 5px 5px 0;
  border: none;
  outline: none;
  cursor: pointer;
`;

const publicUrl = process.env.PUBLIC_URL || '';

const recommend = [
  {
    avatar: `${publicUrl}/img/ava-follower1.jpg`,
    name: 'FIFA.com',
    official: false,
    id: 33,
  },

  {
    avatar: `${publicUrl}/img/ava-follower2.jpg`,
    name: 'Creode',
    official: true,
    id: 44,
  },
  {
    avatar: `${publicUrl}/img/ava-follower3.jpg`,
    name: 'numiko',
    official: false,
    id: 55,
  },
];

export default () => (
  <WhoToFollow>
    <Heading>
      <Title>
Who to follow
      </Title>
      ·
      <Button>
Refresh
      </Button>
      ·
      <Button>
View all
      </Button>
    </Heading>
    {recommend.map(user => (
      <RecommendFollowers
        id={user.id}
        name={user.name}
        official={user.official}
        avatar={user.avatar}
      />
    ))}
    <SidebarHeading icon={peopleIcon} to="/find_you_follow">
      Find people you know
    </SidebarHeading>
  </WhoToFollow>
);
