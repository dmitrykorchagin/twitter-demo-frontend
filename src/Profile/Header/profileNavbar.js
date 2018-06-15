import React from "react";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";
import avatar from "./img/Avatar.png";
import more from "./img/more.svg";

const ProfileNavbar = styled.div`
  width: 100%;
  box-shadow: 0px 2px 2px #b0b8be;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const ProfileInfo = styled.div`
  min-width: 265px;
  position: relative;
`;

const ProfileAvatar = styled.div``;

const Avatar = styled.a`
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
  justify-content: center;
  margin-left: 18px;
  align-items: center;
`;

const NavItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-right: 41px;
  text-decoration: none;
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
  align-items: center;
  position: absolute;
  right: 0;
`;

const FollowBtn = styled.button`
  padding: 9px 27px;
  border-radius: 100px;
  border: 1px solid #1da1f2;
  color: #1da1f2;
  margin-left: ;
`;

const Dropmenu = styled.button`
  height: 14px;
  width: 4px;
  margin-left: 18px;
  border: none;
  outline: none;
  cursor: pointer;
  background: url(${more}) no-repeat center;
`;

export default () => {
  return (
    <div>
      <ProfileNavbar>
        <Grid>
          <Container>
            <ProfileInfo>
              <ProfileAvatar>
                <Avatar />
              </ProfileAvatar>
            </ProfileInfo>
            <ProfileNav>
              <NavItem href="#">
                <Text>Tweets</Text>
                <Amount>8,058</Amount>
              </NavItem>
              <NavItem>
                <Text>Following</Text>
                <Amount>721</Amount>
              </NavItem>
              <NavItem>
                <Text>Followers</Text>
                <Amount>1,815</Amount>
              </NavItem>
              <NavItem>
                <Text>Likes</Text>
                <Amount>460</Amount>
              </NavItem>
              <NavItem>
                <Text>List</Text>
                <Amount>2</Amount>
              </NavItem>
            </ProfileNav>
            <Rightnav>
              <FollowBtn>Follow</FollowBtn>
              <Dropmenu />
            </Rightnav>
          </Container>
        </Grid>
      </ProfileNavbar>
    </div>
  );
};
