import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SideHeading = styled.div`
  display: flex;
  flex-direction: row;
`;

const SideIcon = styled.img``;

const SideTitleLink = styled(NavLink)`
  color: #1da1f2;
  text-decoration: none;
  margin-left: 8px;
  font-size: 14px;
  line-height: 16px;
`;

export default ({ icon, title, titleLink }) => {
  return (
    <SideHeading>
      <SideIcon src={icon} />
      <SideTitleLink exact to={titleLink}>
        {title}
      </SideTitleLink>
    </SideHeading>
  );
};
