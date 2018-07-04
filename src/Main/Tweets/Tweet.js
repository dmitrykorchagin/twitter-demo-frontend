import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import Action from './Action';
import commentsIcon from '../img/comments.svg';
import retweetIcon from '../img/retweet.svg';
import lovesIcon from '../img/loves.svg';
import envelopeIcon from '../img/envelope.svg';
import pinnedIcon from '../img/pinned.svg';

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

  &:hover {
    background: #f5f8fa;
    cursor: pointer;
  }
`;

const StTweet = styled.div`
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
  margin: 5px 0;
`;

const TweetImg = styled.img`
  width: 100%;
  height: auto;
`;

const Card = styled.div`
  display: flex;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  max-height: 225px;
  margin-top: 5px;
`;

const CardImage = styled.img`
  width: 126px;
  height: 126px;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const CardTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

const CardDescription = styled.p`
  font-size: 12px;
`;

const CardLink = styled.span`
  color: #707e88;
  font-size: 12px;
`;

const ActionList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
`;

class Tweet extends React.Component {
  state = {
    card: [],
  };

  componentDidMount() {
    const { id } = this.props;
    fetch(
      `https://twitter-demo.erodionov.ru/api/v1/statuses/${id}/card?access_token=${
        process.env.REACT_APP_ACCESS_TOKEN
      }
      `,
    )
      .then(result => result.json())
      .then(response => this.setState({ card: response }));
  }

  render() {
    const { card } = this.state;
    const {
      id,
      nick,
      user,
      avatar,
      text,
      time,
      pinned,
      img,
      retweets,
      loves,
      comments,
      envelope,
    } = this.props;
    return (
      <TweetWrap key={id}>
        {pinned && (
          <PinnedTweet>
            <PinnedIcon src={pinnedIcon} />
            Pinned Post
          </PinnedTweet>
        )}
        <StTweet>
          <Header>
            <Nick>
              {nick}
            </Nick>
            <AtNick>
              @
              {user}
            </AtNick>
            <Time>
              •
              {format(time, 'DD MMM')}
            </Time>
            <Avatar src={avatar} />
          </Header>
          <Text dangerouslySetInnerHTML={{ __html: text }} />
          {img.map(imgs => <TweetImg src={imgs.preview_url} alt="post image" />)}
          {card.url && (
            <Card key={id}>
              {card.image && <CardImage src={card.image} />}
              <CardText>
                <CardTitle>
                  {card.title}
                </CardTitle>
                <CardDescription>
                  {card.description}
                </CardDescription>
                <CardLink>
                  {card.url}
                </CardLink>
              </CardText>
            </Card>
          )}
        </StTweet>
        <ActionList>
          <Action icon={commentsIcon} count={comments > 0 && comments} alt="comments icon" />
          <Action icon={retweetIcon} count={retweets > 0 && retweets} alt="retweet icon" />
          <Action icon={lovesIcon} count={loves > 0 && loves} alt="loves icon" />
          <Action icon={envelopeIcon} count={envelope > 0 && envelope} alt="envelope icon" />
        </ActionList>
      </TweetWrap>
    );
  }
}

export default Tweet;
