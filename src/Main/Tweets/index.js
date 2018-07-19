// @flow

import React from 'react';
import styled from 'styled-components';
import Tweet from './Tweet';

const Tweets = styled.section``;

class TweetFeed extends React.Component<{ userId: number }, { tweetData: Array<Object> }> {
  state = { tweetData: [] };

  componentDidMount() {
    const { userId } = this.props;
    const token = process.env.REACT_APP_ACCESS_TOKEN || '';
    fetch(
      `https://twitter-demo.erodionov.ru/api/v1/accounts/${userId}/statuses/?access_token=${token}`,
    )
      .then(result => result.json())
      .then(response => this.setState({ tweetData: response }));
  }

  render() {
    const { tweetData } = this.state;
    return (
      <Tweets>
        {tweetData.map(tweets => (
          <Tweet
            id={tweets.id}
            pinned={tweets.pinned}
            nick={tweets.account.display_name}
            user={tweets.account.username}
            avatar={tweets.account.avatar}
            time={tweets.created_at}
            text={tweets.content}
            img={tweets.media_attachments}
            comments={0}
            retweets={tweets.reblogs_count}
            loves={tweets.favourites_count}
            envelope={0}
          />
        ))}
      </Tweets>
    );
  }
}

export default TweetFeed;
