import React from "react";
import styled from "styled-components";
import Follower from "./Follower";
import SidebarHeading from "../SidebarHeading";
import followersIcon from "../img/followers.svg";
import avatar1 from "../img/avatar-1.jpg";
import avatar2 from "../img/avatar-2.jpg";
import avatar3 from "../img/avatar-3.jpg";
import avatar4 from "../img/avatar-4.jpg";
import avatar5 from "../img/avatar-5.jpg";
import avatar6 from "../img/avatar-6.jpg";

const Followers = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const FollowersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 8px 0 30px;
`;

export default () => {
  return (
    <Followers>
      <SidebarHeading
        icon={followersIcon}
        title="6 Followers you know"
        titleLink="/EveryInteract/followers_you_follow"
      />
      <FollowersList>
        <Follower link="/follower1" avatar={avatar1} alt="follower avatar" />
        <Follower link="/follower2" avatar={avatar2} alt="follower avatar" />
        <Follower link="/follower3" avatar={avatar3} alt="follower avatar" />
        <Follower link="/follower4" avatar={avatar4} alt="follower avatar" />
        <Follower link="/follower5" avatar={avatar5} alt="follower avatar" />
        <Follower link="/follower6" avatar={avatar6} alt="follower avatar" />
      </FollowersList>
    </Followers>
  );
};
