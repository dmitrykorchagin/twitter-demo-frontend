import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SideHeading = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const Icon = styled.img``;

const SideTitleLink = styled(Link)`
  color: #1da1f2;
  text-decoration: none;
  margin-left: 8px;
  font-size: 14px;
  line-height: 16px;
`;

export default ({ icon, to, title }) => {
  return (
    <SideHeading>
      <Icon src={icon} />
      <SideTitleLink exact to={to}>
        {title}
      </SideTitleLink>
    </SideHeading>
  );
};
