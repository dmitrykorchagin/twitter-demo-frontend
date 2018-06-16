import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link, NavLink } from "react-router-dom";
import tickIcon from "./img/tick.svg";
import locationIcon from "./img/location.svg";
import linkIcon from "./img/link.svg";
import joinedIcon from "./img/joined.svg";
import pinnedIcon from "./img/pinned.svg";
import avatar from "./img/avatar.jpg";
import commentsIcon from "./img/comments.svg";
import postImg from "./img/post.jpg";
import post3Img from "./img/post3.jpg";
import retweetIcon from "./img/retweet.svg";
import lovesIcon from "./img/loves.svg";
import envelopeIcon from "./img/envelope.svg";

const Main = styled.main`
  background: #e6ecf0;
`;

const Description = styled.section`
  margin-top: 41px;
  display: inline-block;
`;

const Content = styled.section`
  margin-top: 10px;
`;

const NickLink = styled(Link)`
  display: inherit;
  font-size: 22px;
  font-size: 22px;
  line-height: 22px;
  font-weight: bold;
  letter-spacing: 0.02px;
  text-decoration: none;
  color: #14171a;
  margin-bottom: 6px;
`;

const Tick = styled.img`
  margin-left: 5px;
  width: 18px;
  height: 18px;
  padding-top: 3px;
  position: relative;
  top: 2px;
`;

const FollowLink = styled(Link)`
  color: #697787;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.01px;
  cursor: pointer;
  text-decoration: none;
`;

const Follow = styled.span`
  margin-left: 8px;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.01px;
  color: #697787;
`;

const ProfileBio = styled.div`
  margin-top: 10px;
  font-size: 14px;
  line-height: 20px;
  color: #14171a;
  letter-spacing: 0.01px;
  padding-right: 18px;
`;

const LocationIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const Location = styled.div`
  display: flex;
  margin-top: 10px;
`;

const LocationCity = styled.span`
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.01px;
  color: #697787;
  margin-right: 124px;
  margin-left: 8px;
  align-self: center;
`;

const WebSiteLink = Location.extend``;

const LinkIcon = LocationIcon.extend``;

const LinkAdress = styled.a`
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.01px;
  color: #006dc0;
  margin-right: 124px;
  margin-left: 8px;
  vertical-align: text-top;
  text-decoration: none;
`;

const Joined = Location.extend``;

const JoinedIcon = LocationIcon.extend``;

const JoinedDate = LocationCity.extend``;

const Tweet = styled.button`
  border-radius: 100px;
  background-color: #1da1f2;
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
  letter-spacing: 0.01px;
  cursor: pointer;
  border: none;
  margin-right: 5px;
  margin-top: 17px;
  padding: 12px 36px;
  color: #fff;
  outline: none;
`;

const Message = Tweet.extend`
  padding: 12px 34px;
`;

const NavigationList = styled.ul`
  display: flex;
  padding: 0;
  padding-left: 16px;
  background: #fff;
  margin: 0;
  list-style: none;
`;

const Navigation = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavigationLink = styled(NavLink)`
  display: flex;
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
  margin-right: 15px;
  padding-top: 15px;
  padding-bottom: 10px;
  color: ${props =>
    props.activeClassName === "selected" ? "#14171a" : "#1da1f2"};
  &:hover {
    text-decoration: ${props =>
      props.activeClassName === "selected" ? "none" : "underline"};
  }
`;

const PostWrap = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e6ecf0;
  background: #fff;
  padding: 5px 10px 15px 71px;
`;

const PinnedPost = styled.span`
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

const Post = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const PostNick = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: #14171a;
  margin-right: 3px;
`;

const PostAtNick = PostNick.extend`
  font-weight: normal;
  color: #707e88;
`;

const PostDate = PostAtNick.extend``;

const PostAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  left: -60px;
  top: 0;
`;

const PostText = styled.p`
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
    <Main>
      <Grid>
        <Row>
          <Col lg={3}>
            <Description>
              <NickLink to="/EveryInteract">Every Interaction</NickLink>
              <Tick src={tickIcon} alt="Verified Profile" />

              <FollowLink to="/EveryInteract">@EveryInteract</FollowLink>
              <Follow>Follows you</Follow>

              <ProfileBio>
                UX Design studio focussed problem solving creativity. Design to
                us is how can we make things *work* amazing.
              </ProfileBio>
              <Location>
                <LocationIcon src={locationIcon} alt="location icon" />
                <LocationCity>London, UK</LocationCity>
              </Location>
              <WebSiteLink>
                <LinkIcon src={linkIcon} alt="link icon" />
                <LinkAdress href="everyinteraction.com">
                  everyinteraction.com
                </LinkAdress>
              </WebSiteLink>
              <Joined>
                <JoinedIcon src={joinedIcon} alt="calendar" />
                <JoinedDate>Joined May 2008</JoinedDate>
              </Joined>

              <Tweet>Tweet to</Tweet>
              <Message>Message</Message>
            </Description>
          </Col>
          <Col lg={6}>
            <Content>
              <NavigationList>
                <NavigationList>
                  <NavigationLink
                    exact
                    to="/EveryInteract"
                    activeClassName="selected"
                  >
                    Tweets
                  </NavigationLink>
                </NavigationList>
                <NavigationList>
                  <Navigation>
                    <NavigationLink exact to="/EveryInteract/with_replies">
                      Tweets & replies
                    </NavigationLink>
                  </Navigation>
                </NavigationList>
                <NavigationList>
                  <Navigation>
                    <NavigationLink exact to="/EveryInteract/media">
                      Media
                    </NavigationLink>
                  </Navigation>
                </NavigationList>
              </NavigationList>
              <PostWrap>
                <PinnedPost>
                  <PinnedIcon src={pinnedIcon} />Pinned Post
                </PinnedPost>

                <Post>
                  <PostHeader>
                    <PostNick>EveryInteract</PostNick>
                    <PostAtNick>@EveryInteract</PostAtNick>
                    <PostDate>• 2 Mar 2015</PostDate>
                    <PostAvatar src={avatar} />
                  </PostHeader>
                  <PostText>
                    We’ve made some more resources for all you wonderful #design
                    folk everyinteraction.com/resources/ #webdesign #UI
                  </PostText>
                  <PostImg src={postImg} alt="post image" />
                </Post>
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
              </PostWrap>
              <PostWrap>
                <Post>
                  <PostHeader>
                    <PostNick>EveryInteract</PostNick>
                    <PostAtNick>@EveryInteract</PostAtNick>
                    <PostDate>• 2 Mar 2015</PostDate>
                    <PostAvatar src={avatar} />
                  </PostHeader>
                  <PostText>
                    Our new website concept; Taking you from… @ Every
                    Interaction instagram.com/p/BNFGrfhBP3M/
                  </PostText>
                </Post>
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
              </PostWrap>
              <PostWrap>
                <Post>
                  <PostHeader>
                    <PostNick>EveryInteract</PostNick>
                    <PostAtNick>@EveryInteract</PostAtNick>
                    <PostDate>• 2 Mar 2015</PostDate>
                    <PostAvatar src={avatar} />
                  </PostHeader>
                  <PostText>
                    Variable web fonts are coming, and will open a world of
                    opportunities for weight use online
                  </PostText>
                  <PostImg src={post3Img} alt="post image" />
                </Post>
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
              </PostWrap>
            </Content>
          </Col>
        </Row>
      </Grid>
    </Main>
  );
};
