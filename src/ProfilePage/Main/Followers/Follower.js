import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Follower = styled.li``;

const FollowerLink = styled(NavLink)`
  padding-right: 5px;
`;

const FollowerAvatar = styled.img`
  width: 48px;
  height: 48px;
`;

export default ({ link, avatar, alt }) => {
  return (
    <Follower>
      <FollowerLink exact to={link}>
        <FollowerAvatar src={avatar} alt={alt} />
      </FollowerLink>
    </Follower>
  );
};
