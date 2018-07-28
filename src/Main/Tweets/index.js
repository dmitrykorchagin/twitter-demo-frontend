// @flow

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Tweet from './Tweet';
import type { UserData, TweetData } from '../types';

const Tweets = styled.section``;

type Props = {
  userData: UserData,
};

type State = {
  tweetData: TweetData,
  error: ?Object,
};

class TweetFeed extends React.Component<Props, State> {
  state = { tweetData: [], error: null };

  componentDidMount() {
    const { userData } = this.props;
    const token = process.env.REACT_APP_ACCESS_TOKEN || '';
    fetch(
      `https://twitter-demo.erodionov.ru/api/v1/accounts/${
        userData.id
      }/statuses/?access_token=${token}`,
    )
      .then(result => result.json())
      .then(
        (response) => {
          this.setState({
            tweetData: response,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        },
      );
  }

  render() {
    const { tweetData, error } = this.state;
    const { userData } = this.props;

    if (error) {
      return (
        <div>
          Error:
          {error.message}
        </div>
      );
    }

    return (
      <Tweets>
        {tweetData.map(tweets => (
          <Tweet
            id={userData.id}
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

const mapStateToProps = state => ({ userData: state.userData });

export default connect(mapStateToProps)(TweetFeed);
