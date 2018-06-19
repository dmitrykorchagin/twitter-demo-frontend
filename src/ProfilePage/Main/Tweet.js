import React from "react";
import styled from "styled-components";
import commentsIcon from "./img/comments.svg";
import retweetIcon from "./img/retweet.svg";
import lovesIcon from "./img/loves.svg";
import envelopeIcon from "./img/envelope.svg";
import pinnedIcon from "./img/pinned.svg";

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

const TweetHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const TweetNick = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: #14171a;
  margin-right: 3px;
`;

const TweetAtNick = TweetNick.extend`
  font-weight: normal;
  color: #707e88;
`;

const TweetDate = TweetAtNick.extend``;

const TweetAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  left: -60px;
  top: 0;
`;

const TweetText = styled.p`
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

const Action = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0;
  margin-top: 15px;
  margin-right: 38px;
`;

const ActionIcon = styled.img``;

const ActionCount = styled.span`
  font-size: 13px;
  line-height: 15px;
  margin-left: 10px;
`;

export default ({
  pinned,
  tweetNick,
  tweetAtNick,
  tweetAvatar,
  date,
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
        <TweetHeader>
          <TweetNick>{tweetNick}</TweetNick>
          <TweetAtNick>{tweetAtNick}</TweetAtNick>
          <TweetDate>• {date}</TweetDate>
          <TweetAvatar src={tweetAvatar} />
        </TweetHeader>
        <TweetText>{text}</TweetText>
        {img && <TweetImg src={img} alt="post image" />}
      </Tweet>
      <ActionList>
        <Action>
          <ActionIcon src={commentsIcon} alt="comments icon" />
          <ActionCount>{comments > 0 && comments}</ActionCount>
        </Action>
        <Action>
          <ActionIcon src={retweetIcon} alt="retweet icon" />
          <ActionCount>{retweets > 0 && retweets}</ActionCount>
        </Action>
        <Action>
          <ActionIcon src={lovesIcon} alt="comments icon" />
          <ActionCount>{loves > 0 && loves}</ActionCount>
        </Action>
        <Action>
          <ActionIcon src={envelopeIcon} alt="comments icon" />
          <ActionCount>{envelope > 0 && envelope}</ActionCount>
        </Action>
      </ActionList>
    </TweetWrap>
  );
};
