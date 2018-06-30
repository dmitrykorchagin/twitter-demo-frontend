import React from 'react';
import styled from 'styled-components';
import TweetNavigation from './TweetNavigation';
import Tweet from './Tweet';

const Tweets = styled.section`
  margin-top: 10px;
`;

export default ({ data, user }) => (
  <Tweets>
    <TweetNavigation user={`${user}`} />
    {data.map(tweets => (
      <Tweet
        pinned={tweets.pinned}
        nick={tweets.nick}
        user={tweets.user}
        avatar={tweets.avatar}
        time={tweets.time}
        text={tweets.text}
        img={tweets.img}
        comments={tweets.comments}
        retweets={tweets.retweets}
        loves={tweets.loves}
      />
    ))}
  </Tweets>
);
