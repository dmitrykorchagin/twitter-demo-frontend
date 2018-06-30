import React from 'react';
import styled from 'styled-components';
import Trend from './Trend';

const Trends = styled.div`
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
  flex-wrap: wrap;
  margin-bottom: 5px;
`;

const Title = styled.h3`
  font-size: 16px;
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

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export default ({ data }) => (
  <Trends>
    <Heading>
      <Title>
United Kingdom Trends
      </Title>
      ·
      <Button>
Change
      </Button>
    </Heading>
    <List>
      {data.map(trend => (
        <Trend
          topic={trend.topic}
          to={trend.to}
          description={trend.description}
          count={trend.count}
        />
      ))}
    </List>
  </Trends>
);
