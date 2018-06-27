import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import deleteIcon from '../img/delete.svg';

const RecommendFollowers = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e6ecf0;
`;

const NickBox = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

const Nick = styled(Link)`
  font-size: 14px;
  font-weight: bold;
  color: #14171a;
  margin-left: 55px;
  text-decoration: none;
  white-space: nowrap;
  margin-right: 5px;

  &:hover {
    color: #1da1f2;
    text-decoration: underline;
  }
`;

const AtNick = styled(Link)`
  font-size: 14px;
  color: #657786;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Tick = styled.img`
  width: 16px;
  height: 16px;
  align-items: center;
  display: flex;
  margin-right: 5px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  position: absolute;
  top: 0;
  left: 0;
`;

const DeleteIcon = styled.img`
  position: absolute;
  right: 0;
  top: 0;

  &:hover {
    cursor: pointer;
  }
`;

const FollowButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 6px 22px;
  border-radius: 100px;
  border: 1px solid #1da1f2;
  color: #1da1f2;
  background: #fff;
  cursor: pointer;
  outline: none;
  max-width: 89px;
  margin-left: 55px;
  margin-top: 10px;
  font-size: 14px;
`;

export default ({
  nick, to, avatar, tick,
}) => (
  <RecommendFollowers>
    <NickBox>
      <Nick exact to={to}>
        <Avatar src={avatar} />
        {nick}
      </Nick>
      {tick && <Tick src={tick} />}
      <AtNick exact to={to}>
        @
        {nick}
      </AtNick>
      <DeleteIcon src={deleteIcon} />
    </NickBox>
    <FollowButton>
Follow
    </FollowButton>
  </RecommendFollowers>
);
