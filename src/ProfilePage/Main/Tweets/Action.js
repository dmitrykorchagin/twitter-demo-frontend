import React from 'react';
import styled from 'styled-components';

const Action = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0;
  margin-top: 15px;
  margin-right: 38px;
`;

const Icon = styled.img``;

const Count = styled.span`
  font-size: 13px;
  line-height: 15px;
  margin-left: 10px;
`;

export default ({ icon, count, alt }) => (
  <Action>
    <Icon src={icon} alt={alt} />
    <Count>
      {count}
    </Count>
  </Action>
);
