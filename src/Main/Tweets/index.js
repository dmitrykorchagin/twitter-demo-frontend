import React from 'react';
import styled from 'styled-components';
import Tweet from './Tweet';

const Tweets = styled.section``;

class TweetFeed extends React.Component {
  state = {
    tweetData: [],
    error: false,
  };

  componentDidMount() {
    const { userId } = this.props;

    fetch(
      `https://twitter-demo.erodionov.ru/api/v1/accounts/${userId}/statuses/?access_token=${
        process.env.REACT_APP_ACCESS_TOKEN
      }`,
    )
      .then(result => result.json())
      .then(
        response => this.setState({
          tweetData: response,
        }),
        error => this.setState({ error }),
      );
  }

  render() {
    const {
      tweetData, comments, envelope, error,
    } = this.state;
    if (error) {
      return (
        <h2>
Error
        </h2>
      );
    }
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
            comments={comments}
            retweets={tweets.reblogs_count}
            loves={tweets.favourites_count}
            envelope={envelope}
          />
        ))}
      </Tweets>
    );
  }
}

export default TweetFeed;
