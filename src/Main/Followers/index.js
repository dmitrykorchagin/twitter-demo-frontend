import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Follower from './Follower';
import type { UserData, FollowersData } from '../types';
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

type Props = { userData: UserData };

type State = { followers: FollowersData };

class FollowersList extends React.Component<Props, State> {
  state = { followers: [] };

  componentDidUpdate() {
    this.getFollowers();
  }

  getFollowers = () => {
    const { userData } = this.props;
    const token = process.env.REACT_APP_ACCESS_TOKEN || '';
    fetch(
      `https://twitter-demo.erodionov.ru/api/v1/accounts/${
        userData.id
      }/followers/?access_token=${token}`,
    )
      .then(result => result.json())
      .then(response => this.setState({ followers: response }));
  };

  render() {
    const { userData } = this.props;
    const { followers } = this.state;
    return (
      <div>
        <Followers>
          <SidebarHeading icon={followersIcon} to={`/${userData.id}/followers_you_follow`}>
            {`${userData.followers_count} Followers you know`}
          </SidebarHeading>
          <List>
            {followers.map(follower => (
              <Follower to={`/${follower.id}`} avatar={follower.avatar} />
            ))}
          </List>
        </Followers>
      </div>
    );
  }
}

const mapStateToProps = state => ({ userData: state.userData });

export default connect(mapStateToProps)(FollowersList);
