import React from "react";
import styled from "styled-components";
import TweetNavigation from "./TweetNavigation";
import pinnedIcon from "./img/pinned.svg";
import avatar from "./img/avatar.jpg";
import commentsIcon from "./img/comments.svg";
import postImg from "./img/post.jpg";
import post3Img from "./img/post3.jpg";
import retweetIcon from "./img/retweet.svg";
import lovesIcon from "./img/loves.svg";
import envelopeIcon from "./img/envelope.svg";

const Tweets = styled.section`
  margin-top: 10px;
`;

const TweetWrap = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e6ecf0;
  background: #fff;
  padding: 5px 10px 15px 71px;
`;

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

const PostImg = styled.img`
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

export default () => {
  return (
    <Tweets>
      <TweetNavigation />
      <TweetWrap>
        <PinnedTweet>
          <PinnedIcon src={pinnedIcon} />Pinned Post
        </PinnedTweet>
        <Tweet>
          <TweetHeader>
            <TweetNick>EveryInteract</TweetNick>
            <TweetAtNick>@EveryInteract</TweetAtNick>
            <TweetDate>• 2 Mar 2015</TweetDate>
            <TweetAvatar src={avatar} />
          </TweetHeader>
          <TweetText>
            We’ve made some more resources for all you wonderful #design folk
            everyinteraction.com/resources/ #webdesign #UI
          </TweetText>
          <PostImg src={postImg} alt="post image" />
        </Tweet>
        <ActionList>
          <Action>
            <ActionIcon src={commentsIcon} alt="comments icon" />
            <ActionCount>1</ActionCount>
          </Action>
          <Action>
            <ActionIcon src={retweetIcon} alt="retweet icon" />
            <ActionCount>17</ActionCount>
          </Action>
          <Action>
            <ActionIcon src={lovesIcon} alt="comments icon" />
            <ActionCount>47</ActionCount>
          </Action>
          <Action>
            <ActionIcon src={envelopeIcon} alt="comments icon" />
            <ActionCount />
          </Action>
        </ActionList>
      </TweetWrap>
      <TweetWrap>
        <Tweet>
          <TweetHeader>
            <TweetNick>EveryInteract</TweetNick>
            <TweetAtNick>@EveryInteract</TweetAtNick>
            <TweetDate>• 2 Mar 2015</TweetDate>
            <TweetAvatar src={avatar} />
          </TweetHeader>
          <TweetText>
            Our new website concept; Taking you from… @ Every Interaction
            instagram.com/p/BNFGrfhBP3M/
          </TweetText>
        </Tweet>
        <ActionList>
          <Action>
            <ActionIcon src={commentsIcon} alt="comments icon" />
            <ActionCount>1</ActionCount>
          </Action>
          <Action>
            <ActionIcon src={retweetIcon} alt="retweet icon" />
            <ActionCount>4</ActionCount>
          </Action>
          <Action>
            <ActionIcon src={lovesIcon} alt="comments icon" />
            <ActionCount>2</ActionCount>
          </Action>
          <Action>
            <ActionIcon src={envelopeIcon} alt="comments icon" />
            <ActionCount />
          </Action>
        </ActionList>
      </TweetWrap>
      <TweetWrap>
        <Tweet>
          <TweetHeader>
            <TweetNick>EveryInteract</TweetNick>
            <TweetAtNick>@EveryInteract</TweetAtNick>
            <TweetDate>• 2 Mar 2015</TweetDate>
            <TweetAvatar src={avatar} />
          </TweetHeader>
          <TweetText>
            Variable web fonts are coming, and will open a world of
            opportunities for weight use online
          </TweetText>
          <PostImg src={post3Img} alt="post image" />
        </Tweet>
        <ActionList>
          <Action>
            <ActionIcon src={commentsIcon} alt="comments icon" />
            <ActionCount />
          </Action>
          <Action>
            <ActionIcon src={retweetIcon} alt="retweet icon" />
            <ActionCount />
          </Action>
          <Action>
            <ActionIcon src={lovesIcon} alt="comments icon" />
            <ActionCount />
          </Action>
          <Action>
            <ActionIcon src={envelopeIcon} alt="comments icon" />
            <ActionCount />
          </Action>
        </ActionList>
      </TweetWrap>
    </Tweets>
  );
};
