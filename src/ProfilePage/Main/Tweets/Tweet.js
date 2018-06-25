import React from "react";
import styled from "styled-components";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import Action from "./Action";
import commentsIcon from "../img/comments.svg";
import retweetIcon from "../img/retweet.svg";
import lovesIcon from "../img/loves.svg";
import envelopeIcon from "../img/envelope.svg";
import pinnedIcon from "../img/pinned.svg";

const PinnedTweet = styled.span`
  font-size: 12px;
  line-height: 14px;
  color: #707e88;
  margin-top: 5px;
  position: relative;
`;

const PinnedIcon = styled.img`
  position: absolute;
  left: -15px;
  top: 2px;
`;

const TweetWrap = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e6ecf0;
  background: #fff;
  padding: 5px 10px 15px 71px;
`;

const Tweet = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Nick = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: #14171a;
  margin-right: 3px;
`;

const AtNick = Nick.extend`
  font-weight: normal;
  color: #707e88;
`;

const Time = AtNick.extend``;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  left: -60px;
  top: 0;
`;

const Text = styled.p`
  font-size: 25px;
  font-weight: 300;
`;

const TweetImg = styled.img`
  width: 100%;
  height: auto;
`;

const ActionList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export default ({
  pinned,
  nick,
  atNick,
  avatar,
  time,
  text,
  img,
  comments,
  retweets,
  loves,
  envelope
}) => {
  return (
    <TweetWrap>
      {pinned && (
        <PinnedTweet>
          <PinnedIcon src={pinnedIcon} /> Pinned Post
        </PinnedTweet>
      )}
      <Tweet>
        <Header>
          <Nick>{nick}</Nick>
          <AtNick>{atNick}</AtNick>
          <Time>• {format(time, "DD MMM")}</Time>
          <Avatar src={avatar} />
        </Header>
        <Text>{text}</Text>
        {img && <TweetImg src={img} alt="post image" />}
      </Tweet>
      <ActionList>
        <Action icon={commentsIcon} count={comments > 0 && comments} />
        <Action icon={retweetIcon} count={retweets > 0 && retweets} />
        <Action icon={lovesIcon} count={loves > 0 && loves} />
        <Action icon={envelopeIcon} count={envelope > 0 && envelope} />
      </ActionList>
    </TweetWrap>
  );
};
