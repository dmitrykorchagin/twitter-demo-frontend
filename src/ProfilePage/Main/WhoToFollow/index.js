import React from "react";
import styled from "styled-components";
import RecommendFollowers from "./RecommendFollowers";
import SidebarHeading from "../SidebarHeading";
import avatar1 from "../img/ava-follower1.jpg";
import avatar2 from "../img/ava-follower2.jpg";
import avatar3 from "../img/ava-follower3.jpg";
import deleteIcon from "../img/delete.svg";
import peopleIcon from "../img/people.svg";

const WhoToFollow = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 15px;
  margin-top: 10px;
`;

const WhoToFollowHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const WhoToFollowTitle = styled.h3`
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

export default () => {
  return (
    <WhoToFollow>
      <WhoToFollowHeading>
        <WhoToFollowTitle>Who to follow</WhoToFollowTitle>
        ·<Button>Refresh</Button>
        ·<Button>View all</Button>
      </WhoToFollowHeading>
      <RecommendFollowers
        nick="AppleInsider"
        to="/appleinsider"
        avatar={avatar1}
        deleteIcon={deleteIcon}
      />
      <RecommendFollowers
        nick="Creode"
        to="/creode"
        avatar={avatar2}
        deleteIcon={deleteIcon}
      />
      <RecommendFollowers
        nick="Epiphany Search"
        to="/epiphanysearch"
        avatar={avatar3}
        deleteIcon={deleteIcon}
      />
      <SidebarHeading
        icon={peopleIcon}
        title="Find people you know"
        to="/EveryInteract/find_you_follow"
      />
    </WhoToFollow>
  );
};