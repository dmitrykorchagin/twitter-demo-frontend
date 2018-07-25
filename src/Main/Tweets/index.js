// @flow

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import userDataFetchData from '../../actions';
import Tweet from './Tweet';

const Tweets = styled.section``;

type UserData = {
  id: string,
  username: string,
  avatar: string,
  acct: string,
  display_name: string,
  locked: boolean,
  bot: boolean,
  created_at: string,
  note: string,
  url: string,
  avatar: string,
  avatar_static: string,
  header: string,
  header_static: string,
  followers_count: number,
  following_count: number,
  statuses_count: number,
  emojis: (?Object)[],
  fields: (?Object)[],
  error?: string,
};

type Props = { userData: UserData };

type State = {
  tweetData: Array<{
    id: string,
    created_at: string,
    in_reply_to_id: ?string,
    in_reply_to_account_id: ?string,
    sensitive: boolean,
    spoiler_text: string,
    visibility: string,
    language: string,
    uri: string,
    content: string,
    url: string,
    reblogs_count: number,
    favourites_count: number,
    favourited: boolean,
    reblogged: boolean,
    muted: boolean,
    pinned: boolean,
    reblog: ?string,
    application: Object,
    account: Object,
    media_attachments: Array<Object>,
    mentions: (?Object)[],
    tags: (?Object)[],
    emojis: (?Object)[],
  }>,
  error: ?Object,
};

class TweetFeed extends React.Component<Props, State> {
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
    const { userData } = this.props;

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

const mapDispatchToProps = dispatch => ({
  fetchUserInfo: url => dispatch(userDataFetchData(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TweetFeed);
