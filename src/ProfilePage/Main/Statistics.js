import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import avatar from './img/Avatar.png';
import more from './img/more.svg';

const Statistics = styled.div`
  width: 100%;
  box-shadow: 0px 2px 2px #b0b8be;
`;

const ProfileInfo = styled.div`
  min-width: 265px;
  position: relative;
`;

const ProfileAvatar = styled.div``;

const AvatarImage = styled.a`
  position: absolute;
  border-radius: 50%;
  top: -120px;
  left: 0;
  height: 210px;
  width: 210px;
  background-image: url(${avatar});
  background-position: center;
  background-size: 100%;
`;

const ProfileNav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ProfileNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 15px;
  margin-right: 21px;
  text-decoration: none;
  border-bottom: 3px solid transparent;

  &.active {
    border-color: #1da1f2;
  }
  &:hover {
    border-color: #1da1f2;
  }
`;

const Text = styled.span`
  font-size: 12px;
  font-weight: bold;
  line-height: 21px;
  letter-spacing: 0.01px;
  color: #707e88;
`;

const Amount = Text.extend`
  font-size: 18px;
`;

const Rightnav = styled.div`
  display: flex;
  padding-top: 11px;
  padding-bottom: 11px;
  justify-content: flex-end;
`;

const FollowBtn = styled.button`
  padding: 9px 25px;
  border-radius: 100px;
  border: 1px solid #1da1f2;
  color: #1da1f2;
  background: #fff;
  cursor: pointer;
  outline: none;
`;

const Dropmenu = styled.button`
  align-self: center;
  height: 14px;
  width: 4px;
  margin-left: 13px;
  border: none;
  outline: none;
  cursor: pointer;
  background: url(${more}) no-repeat center;
`;

export default ({ user }) => (
  <Statistics>
    <Grid>
      <Row>
        <Col lg={3}>
          <ProfileInfo>
            <ProfileAvatar>
              <AvatarImage />
            </ProfileAvatar>
          </ProfileInfo>
        </Col>
        <Col lg={6}>
          <ProfileNav>
            <ProfileNavLink exact to={`/${user}`}>
              <Text>
Tweets
              </Text>
              <Amount>
8,058
              </Amount>
            </ProfileNavLink>
            <ProfileNavLink exact to={`/${user}/following`}>
              <Text>
Following
              </Text>
              <Amount>
721
              </Amount>
            </ProfileNavLink>
            <ProfileNavLink exact to={`/${user}/followers`}>
              <Text>
Followers
              </Text>
              <Amount>
1,815
              </Amount>
            </ProfileNavLink>
            <ProfileNavLink exact to={`/${user}/likes`}>
              <Text>
Likes
              </Text>
              <Amount>
460
              </Amount>
            </ProfileNavLink>
            <ProfileNavLink exact to={`/${user}/lists`}>
              <Text>
List
              </Text>
              <Amount>
2
              </Amount>
            </ProfileNavLink>
          </ProfileNav>
        </Col>
        <Col lg={3}>
          <Rightnav>
            <FollowBtn>
Follow
            </FollowBtn>
            <Dropmenu />
          </Rightnav>
        </Col>
      </Row>
    </Grid>
  </Statistics>
);
