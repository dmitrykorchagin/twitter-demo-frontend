import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Tweet from './Tweet';

const List = styled.ul`
  display: flex;
  padding: 0;

  background: #fff;
  margin: 0;
  list-style: none;
`;

const Navigation = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
`;

const Link = styled(NavLink)`
  display: flex;
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
  margin-right: 15px;
  padding-top: 15px;
  padding-bottom: 10px;
  color: #1da1f2;

  &.active {
    color: #14171a;
  }
  &:hover {
    text-decoration: underline;
  }
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

export default ({ uid }) => (
  <React.Fragment>
    <List>
      <Navigation>
        <Link exact to={`/${uid}`}>
          Tweets
        </Link>
      </Navigation>
      <Navigation>
        <Link exact to={`/${uid}/with_replies`}>
          Tweets & replies
        </Link>
      </Navigation>
      <Navigation>
        <Link exact to={`/${uid}/media`}>
          Media
        </Link>
      </Navigation>
    </List>
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
  </React.Fragment>
);
