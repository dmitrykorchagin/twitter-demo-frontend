import React from 'react';
import styled from 'styled-components';
import TweetNavigation from './TweetNavigation';

const Tweets = styled.section`
  margin-top: 10px;
`;

export default () => (
  <Tweets>
    <TweetNavigation user="EveryInteract" />
  </Tweets>
);
