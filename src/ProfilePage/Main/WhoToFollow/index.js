import React from "react";
import styled from "styled-components";
import RecommendFollowers from "./RecommendFollowers";
import SidebarHeading from "../SidebarHeading";
import deleteIcon from "../img/delete.svg";
import peopleIcon from "../img/people.svg";
import tickIcon from "../img/tick.svg";

const WhoToFollow = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 15px;
  margin-top: 10px;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.h3`
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
      <Heading>
        <Title>Who to follow</Title>
        ·<Button>Refresh</Button>
        ·<Button>View all</Button>
      </Heading>
      <RecommendFollowers
        nick="AppleInsider"
        to="/appleinsider"
        avatar={`${process.env.PUBLIC_URL}/img/ava-follower1.jpg`}
        deleteIcon={deleteIcon}
      />
      <RecommendFollowers
        nick="Creode"
        to="/creode"
        tick={tickIcon}
        avatar={`${process.env.PUBLIC_URL}/img/ava-follower2.jpg`}
        deleteIcon={deleteIcon}
      />
      <RecommendFollowers
        nick="Epiphany Search"
        to="/epiphanysearch"
        avatar={`${process.env.PUBLIC_URL}/img/ava-follower3.jpg`}
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
