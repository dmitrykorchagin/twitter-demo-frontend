import React from "react";
import styled from "styled-components";
import TweetNavigation from "./TweetNavigation";
import Tweet from "./Tweet";
import tweetImg from "./img/post.jpg";
import tweet3Img from "./img/post3.jpg";
import avatar from "./img/avatar.jpg";

const Tweets = styled.section`
  margin-top: 10px;
`;

export default () => {
  return (
    <Tweets>
      <TweetNavigation />

      <Tweet
        pinned={true}
        tweetNick="Every Interact"
        tweetAtNick="@EveryInteract"
        tweetAvatar={avatar}
        date="2 Mar 2015"
        text="We’ve made some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign #UI"
        img={tweetImg}
        comments={0}
        retweets={17}
        loves={47}
      />
      <Tweet
        pinned={false}
        tweetNick="Every Interact"
        tweetAtNick="@EveryInteract"
        tweetAvatar={avatar}
        date="23h"
        text="Our new website concept; Taking you from… @ Every Interaction instagram.com/p/BNFGrfhBP3M/"
        img={false}
        comments={1}
        retweets={4}
        loves={2}
      />
      <Tweet
        pinned={false}
        tweetNick="Every Interact"
        tweetAtNick="@EveryInteract"
        tweetAvatar={avatar}
        date="Nov 18"
        text="Variable web fonts are coming, and will open a world of opportunities for weight use online"
        img={tweet3Img}
        comments={0}
        retweets={0}
        loves={0}
      />
    </Tweets>
  );
};
