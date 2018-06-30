import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import tickIcon from '../img/tick.svg';
import locationIcon from '../img/location.svg';
import linkIcon from '../img/link.svg';
import joinedIcon from '../img/joined.svg';

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
  cursor: pointer;
  text-decoration: none;
`;

const Follow = styled.span`
  margin-left: 8px;
  font-size: 12px;
  line-height: 12px;
  color: #697787;
`;

const About = styled.div`
  margin-top: 10px;
  font-size: 14px;
  line-height: 20px;
  color: #14171a;
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

const ProfileInfo = styled.div`
  min-width: 265px;
  position: relative;
`;

const ProfileAvatar = styled.div``;

const AvatarImage = styled.img`
  position: absolute;
  border-radius: 50%;
  bottom: 10px;
  left: 0;
  height: 210px;
  width: 210px;
`;

export default ({
  id, name, official, followed, about, location, link, joined, avatar,
}) => (
  <Description>
    <ProfileInfo>
      <ProfileAvatar>
        <AvatarImage src={avatar} />
      </ProfileAvatar>
    </ProfileInfo>
    <NickLink to={`/${id}`}>
      {name}
    </NickLink>
    {official && <Tick src={tickIcon} alt="Verified Profile" />}

    <FollowLink to={`/${id}`}>
      @
      {id}
    </FollowLink>
    {followed && (
    <Follow>
Follows you
    </Follow>
    )}

    <About>
      {about}
    </About>
    <Location>
      {location && <LocationIcon src={locationIcon} alt="location icon" />}
      <LocationCity>
        {location}
      </LocationCity>
    </Location>
    <WebSiteLink>
      {link && <LinkIcon src={linkIcon} alt="link icon" />}
      <LinkAdress href={link}>
        {link}
      </LinkAdress>
    </WebSiteLink>
    <Joined>
      <JoinedIcon src={joinedIcon} alt="calendar" />
      <JoinedDate>
        {joined}
      </JoinedDate>
    </Joined>

    <Tweet>
Tweet to
    </Tweet>
    <Message>
Message
    </Message>
  </Description>
);
