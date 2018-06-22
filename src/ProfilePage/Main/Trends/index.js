import React from "react";
import styled from "styled-components";
import Trend from "./Trend";

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

export default () => {
  return (
    <Trends>
      <Heading>
        <Title>United Kingdom Trends</Title>
        ·<Button>Change</Button>
      </Heading>
      <List>
        <Trend topic="#BringYourDogToWorkDay" to="/linktrend" />
        <Trend
          topic="#FridayFeeling"
          to="/linktrend"
          description="12.1K Tweets"
        />
        <Trend
          topic="#FridayFeeling"
          to="/linktrend"
          description="12.1K Tweets"
        />
        <Trend
          topic="#BrexitAnniversary"
          to="/linktrend"
          description="It’s one year since the UK voted to leave the European Union"
        />
        <Trend
          topic="HMS Queen Elizabeth"
          to="/linktrend"
          description="1,036 Tweets"
        />
        <Trend
          topic="Joe Budden"
          to="/linktrendjoe"
          description="1,036 Tweets"
        />
        <Trend
          topic="Trident"
          to="/linktrendhmndewe"
          description="6,136 Tweets"
        />
      </List>
    </Trends>
  );
};
