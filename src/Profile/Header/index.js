import React, { Component } from "react";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";
import profileimage from "./img/profileimage.jpg";
import logo from "./img/twitter-logo.svg";
import searchbtn from "./img/search-button.svg";
import avatar from "./img/avatar-menu.jpg";
import home from "./img/home.svg";
import moments from "./img/moments.svg";
import notifications from "./img/notifications.svg";
import messages from "./img/messages.svg";

const HeaderWrapper = styled.div`
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const HeadMenu = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Home = styled.a`
  font-size: 13px;
  line-height: 19px;
  margin-right: 25px;
  padding-top: 13px;
  padding-bottom: 13px;
  font-weight: bold;
  color: #667580;
  text-decoration: none;

  &::before {
    content: "";
    float: left;
    padding-left: 6px;
    height: 19px
    width: 20px;
    background-image: url(${home});
    background-repeat: no-repeat;
  }
`;

const Moments = Home.extend`
  &::before {
    content: "";
    float: left;
    padding-left: 6px;
    height: 19px
    width: 20px;
    background-image: url(${moments});
    background-repeat: no-repeat;
  }
`;

const Notifications = Home.extend`
  &::before {
    content: "";
    float: left;
    padding-left: 6px;
    height: 19px
    width: 20px;
    background-image: url(${notifications});
    background-repeat: no-repeat;
    background-position-y: 1px;
  }
`;

const Messages = Home.extend`
  &::before {
    content: "";
    float: left;
    padding-left: 6px;
    height: 19px
    width: 20px;
    background-image: url(${messages});
    background-repeat: no-repeat;
    background-position-y: 3px;
  }
`;

const LogoImg = styled.img`
  float: right;
`;

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

const ProfileBackground = styled.div`
  background: url(${profileimage}) 100%;
  height: 280px;
`;

class Head extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Grid>
          <Header>
            <HeadMenu>
              <Home href="#">Home</Home>
              <Moments href="#">Moments</Moments>
              <Notifications href="#">Notification</Notifications>
              <Messages href="#">Messages</Messages>
            </HeadMenu>
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
        <ProfileBackground />
      </HeaderWrapper>
    );
  }
}

export default Head;
