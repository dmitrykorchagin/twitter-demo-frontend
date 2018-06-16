import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Grid } from "react-flexbox-grid";
import profileimage from "./img/profileimage.jpg";
import logo from "./img/twitter-logo.svg";
import searchbtn from "./img/search-button.svg";
import avatar from "./img/avatar-menu.jpg";
import homeIcon from "./img/home.svg";
import momentsIcon from "./img/moments.svg";
import notificationsIcon from "./img/notifications.svg";
import messagesIcon from "./img/messages.svg";

const HeaderWrapper = styled.div`
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Navigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const NavigationIcon = styled.img``;

const Home = styled(NavLink)`
  font-size: 13px;
  line-height: 19px;
  margin-left: 6px;
  margin-right: 25px;
  padding-top: 13px;
  padding-bottom: 13px;
  font-weight: bold;
  color: #667580;
  text-decoration: none;
  border-bottom: 3px solid transparent;

  &.active {
    border-color: #1da1f2;
  }
  &:hover {
    border-color: #1da1f2;
    transition: all 0.15s ease-in-out;
  }

  @media (max-width: 992px) {
    margin-right: 15px;
  }
`;

const Moments = Home.extend``;

const Notifications = Home.extend``;

const Messages = Home.extend``;

const LogoImg = styled.img``;

const NavRight = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderForm = styled.form`
  display: flex;
  align-items: center;
  position: relative;
`;

const FormInput = styled.input`
  display: flex;
  background: #f5f8fa;
  border: 1px solid #e6ecf0;
  border-radius: 100px;
  padding: 8px 12px;
  align-items: center;
  outline: none;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.01px;
  width: 220px;

  @media (max-width: 922px) {
    width: 129px;
  }
`;

const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  outline: none;
  position: absolute;
  right: 12px;
  background: none;
`;

const AvatarLink = styled.a`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  margin: 0 15px;
`;

const TweetBtn = styled.button`
  display: flex;
  align-items: center;
  background: #1da1f2;
  border: none;
  border-radius: 100px;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.01px;
  padding: 8px 16px;
  color: #fff;
  cursor: pointer;
  outline: none;
`;

const ProfileBackground = styled.img`
  width: 100%;
  height: 380px;
  object-fit: cover;
  display: block;
`;

export default () => {
  return (
    <HeaderWrapper>
      <Grid>
        <Header>
          <Navigation>
            <NavigationIcon src={homeIcon} />
            <Home exact to="/">
              Home
            </Home>
            <NavigationIcon src={momentsIcon} />
            <Moments exact to="/EveryInteract/moments">
              Moments
            </Moments>
            <NavigationIcon src={notificationsIcon} />
            <Notifications exact to="/EveryInteract/notification">
              Notification
            </Notifications>
            <NavigationIcon src={messagesIcon} />
            <Messages exact to="/EveryInteract/likes">
              Messages
            </Messages>
          </Navigation>
          <LogoImg src={logo} alt="logo" />
          <NavRight>
            <HeaderForm>
              <FormInput
                type="text"
                id="search-twitter"
                placeholder="Search Twitter"
              />
              <SearchBtn>
                <img src={searchbtn} alt="search button" />
              </SearchBtn>
            </HeaderForm>
            <AvatarLink>
              <Avatar src={avatar} />
            </AvatarLink>
            <TweetBtn>Tweet</TweetBtn>
          </NavRight>
        </Header>
      </Grid>
      <ProfileBackground src={profileimage} />
    </HeaderWrapper>
  );
};
