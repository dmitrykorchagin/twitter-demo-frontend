import React from 'react';
import styled from 'styled-components';
import TweetNavigation from './TweetNavigation';
import Tweet from './Tweet';

const Tweets = styled.section`
  margin-top: 10px;
`;

const tweets = [
  {
    pinned: true,
    nick: 'Every Interect',
    atNick: '@EveryInteract',
    avatar: `${process.env.PUBLIC_URL}/img/avatar.jpg`,
    time: '2018-03-12T00:00:00+03:00',
    text:
      'We’ve made some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign #UI',
    img: `${process.env.PUBLIC_URL}/img/post.jpg`,
    comments: 0,
    retweets: 17,
    loves: 47,
  },
  {
    pinned: false,
    nick: 'Every Interect',
    atNick: '@EveryInteract',
    avatar: `${process.env.PUBLIC_URL}/img/avatar.jpg`,
    time: '2018-06-21T00:00:00+03:00',
    text:
      'Our new website concept; Taking you from… @ Every Interaction instagram.com/p/BNFGrfhBP3M/',
    comments: 1,
    retweets: 4,
    loves: 2,
  },
  {
    pinned: false,
    nick: 'Every Interect',
    atNick: '@EveryInteract',
    avatar: `${process.env.PUBLIC_URL}/img/avatar.jpg`,
    time: '2018-11-18T00:00:00+03:00',
    text:
      'Variable web fonts are coming, and will open a world of opportunities for weight use online',
    img: `${process.env.PUBLIC_URL}/img/post3.jpg`,
    comments: 0,
    retweets: 0,
    loves: 0,
  },
];

export default () => (
  <Tweets>
    <TweetNavigation />
    {tweets.map(tweet => (
      <Tweet
        pinned={tweet.pinned}
        nick={tweet.nick}
        atNick={tweet.atNick}
        avatar={tweet.avatar}
        time={tweet.time}
        text={tweet.text}
        img={tweet.img}
        comments={tweet.comments}
        retweets={tweet.retweets}
        loves={tweet.loves}
      />
    ))}
  </Tweets>
);
