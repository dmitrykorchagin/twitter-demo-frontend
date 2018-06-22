import React from "react";
import styled from "styled-components";
import Follower from "./Follower";
import SidebarHeading from "../SidebarHeading";
import followersIcon from "../img/followers.svg";

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

export default () => {
  return (
    <Followers>
      <SidebarHeading
        icon={followersIcon}
        title="6 Followers you know"
        to="/EveryInteract/followers_you_follow"
      />
      <List>
        <Follower
          to="/follower1"
          avatar={`${process.env.PUBLIC_URL}/img/avatar-1.jpg`}
          alt="follower avatar"
        />
        <Follower
          to="/follower2"
          avatar={`${process.env.PUBLIC_URL}/img/avatar-2.jpg`}
          alt="follower avatar"
        />
        <Follower
          to="/follower3"
          avatar={`${process.env.PUBLIC_URL}/img/avatar-3.jpg`}
          alt="follower avatar"
        />
        <Follower
          to="/follower4"
          avatar={`${process.env.PUBLIC_URL}/img/avatar-4.jpg`}
          alt="follower avatar"
        />
        <Follower
          to="/follower5"
          avatar={`${process.env.PUBLIC_URL}/img/avatar-5.jpg`}
          alt="follower avatar"
        />
        <Follower
          to="/follower6"
          avatar={`${process.env.PUBLIC_URL}/img/avatar-6.jpg`}
          alt="follower avatar"
        />
      </List>
    </Followers>
  );
};
