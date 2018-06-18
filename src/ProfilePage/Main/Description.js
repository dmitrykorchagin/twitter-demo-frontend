import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import tickIcon from "./img/tick.svg";
import locationIcon from "./img/location.svg";
import linkIcon from "./img/link.svg";
import joinedIcon from "./img/joined.svg";

const Description = styled.section`
  margin-top: 41px;
  display: inline-block;
`;

const NickLink = styled(Link)`
  display: inherit;
  font-size: 22px;
  font-size: 22px;
  line-height: 22px;
  font-weight: bold;
  letter-spacing: 0.02px;
  text-decoration: none;
  color: #14171a;
  margin-bottom: 6px;
`;

const Tick = styled.img`
  margin-left: 5px;
  width: 18px;
  height: 18px;
  padding-top: 3px;
  position: relative;
  top: 2px;
`;

const FollowLink = styled(Link)`
  color: #697787;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.01px;
  cursor: pointer;
  text-decoration: none;
`;

const Follow = styled.span`
  margin-left: 8px;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.01px;
  color: #697787;
`;

const ProfileBio = styled.div`
  margin-top: 10px;
  font-size: 14px;
  line-height: 20px;
  color: #14171a;
  letter-spacing: 0.01px;
  padding-right: 18px;
`;

const LocationIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const Location = styled.div`
  display: flex;
  margin-top: 10px;
`;

const LocationCity = styled.span`
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.01px;
  color: #697787;
  margin-right: 124px;
  margin-left: 8px;
  align-self: center;
`;

const WebSiteLink = Location.extend``;

const LinkIcon = LocationIcon.extend``;

const LinkAdress = styled.a`
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.01px;
  color: #006dc0;
  margin-right: 124px;
  margin-left: 8px;
  vertical-align: text-top;
  text-decoration: none;
`;

const Joined = Location.extend``;

const JoinedIcon = LocationIcon.extend``;

const JoinedDate = LocationCity.extend``;

const Tweet = styled.button`
  border-radius: 100px;
  background-color: #1da1f2;
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
  letter-spacing: 0.01px;
  cursor: pointer;
  border: none;
  margin-right: 5px;
  margin-top: 17px;
  padding: 12px 36px;
  color: #fff;
  outline: none;
`;

const Message = Tweet.extend`
  padding: 12px 34px;
`;

export default () => {
  return (
    <Description>
      <NickLink to="/EveryInteract">Every Interaction</NickLink>
      <Tick src={tickIcon} alt="Verified Profile" />

      <FollowLink to="/EveryInteract">@EveryInteract</FollowLink>
      <Follow>Follows you</Follow>

      <ProfileBio>
        UX Design studio focussed problem solving creativity. Design to us is
        how can we make things *work* amazing.
      </ProfileBio>
      <Location>
        <LocationIcon src={locationIcon} alt="location icon" />
        <LocationCity>London, UK</LocationCity>
      </Location>
      <WebSiteLink>
        <LinkIcon src={linkIcon} alt="link icon" />
        <LinkAdress href="everyinteraction.com">
          everyinteraction.com
        </LinkAdress>
      </WebSiteLink>
      <Joined>
        <JoinedIcon src={joinedIcon} alt="calendar" />
        <JoinedDate>Joined May 2008</JoinedDate>
      </Joined>

      <Tweet>Tweet to</Tweet>
      <Message>Message</Message>
    </Description>
  );
};
