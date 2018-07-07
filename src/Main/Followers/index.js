import React from 'react';
import styled from 'styled-components';
import Follower from './Follower';
import SidebarHeading from '../SidebarHeading';
import followersIcon from '../img/followers.svg';

const Followers = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 8px;
`;

class FollowersU extends React.Component {
  state = {
    followers: [],
    error: false,
  };

  componentDidMount() {
    const { userId } = this.props;
    fetch(
      `https://twitter-demo.erodionov.ru/api/v1/accounts/${userId}/followers/?access_token=${
        process.env.REACT_APP_ACCESS_TOKEN
      }`,
    )
      .then(result => result.json())
      .then(
        response => this.setState({
          followers: response,
        }),
        error => this.setState({ error }),
      );
  }

  render() {
    const { userId, count } = this.props;
    const { followers, error } = this.state;
    if (error) {
      return (
        <h2>
Errors
        </h2>
      );
    }

    return (
      <Followers>
        <SidebarHeading icon={followersIcon} to={`/${userId}/followers_you_follow`}>
          {`${count} Followers you know`}
        </SidebarHeading>
        <List>
          {followers.map(follower => <Follower to={`/${follower.id}`} avatar={follower.avatar} />)}
        </List>
      </Followers>
    );
  }
}

export default FollowersU;
