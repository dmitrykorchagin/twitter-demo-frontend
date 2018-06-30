import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Trend = styled.li`
  display: flex;
  flex-direction: column;
`;

const TrendLink = styled(Link)`
  font-size: 14px;
  font-weight: bold;
  color: #1da1f2;
  text-decoration: none;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Description = styled.span`
  color: #657786;
  font-size: 12px;
  margin-top: 5px;
  flex-wrap: wrap;
`;

const Count = Description.extend``;

export default ({
  topic, to, description, count,
}) => (
  <Trend>
    <TrendLink exact to={to}>
      {topic}
    </TrendLink>
    {description && (
    <Description>
      {description}
    </Description>
    )}
    {count && (
      <Count>
        {count}
        Tweets
      </Count>
    )}
  </Trend>
);
