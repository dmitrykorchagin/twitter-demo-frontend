import React from "react";
import styled from "styled-components";
import TweetNavigation from "./TweetNavigation";
import Tweet from "./Tweet";

const Tweets = styled.section`
  margin-top: 10px;
`;

export default () => {
  return (
    <Tweets>
      <TweetNavigation />

      <Tweet
        pinned={true}
        nick="Every Interact"
        atNick="@EveryInteract"
        avatar={`${process.env.PUBLIC_URL}/img/avatar.jpg`}
        time="2018-03-12T00:00:00+03:00"
        text="We’ve made some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign #UI"
        img={`${process.env.PUBLIC_URL}/img/post.jpg`}
        comments={0}
        retweets={17}
        loves={47}
      />
      <Tweet
        pinned={false}
        nick="Every Interact"
        atNick="@EveryInteract"
        avatar={`${process.env.PUBLIC_URL}/img/avatar.jpg`}
        time="2018-06-21T00:00:00+03:00"
        text="Our new website concept; Taking you from… @ Every Interaction instagram.com/p/BNFGrfhBP3M/"
        img={false}
        comments={1}
        retweets={4}
        loves={2}
      />
      <Tweet
        pinned={false}
        nick="Every Interact"
        atNick="@EveryInteract"
        avatar={`${process.env.PUBLIC_URL}/img/avatar.jpg`}
        time="2018-11-18T00:00:00+03:00"
        text="Variable web fonts are coming, and will open a world of opportunities for weight use online"
        img={`${process.env.PUBLIC_URL}/img/post3.jpg`}
        comments={0}
        retweets={0}
        loves={0}
      />
    </Tweets>
  );
};
