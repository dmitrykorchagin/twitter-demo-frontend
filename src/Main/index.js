// @flow
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Helmet from 'react-helmet';
import Statistics from './Statistics';
import TweetNavigation from './TweetNavigation';
import ProfileInfo from './ProfileInfo';
import Followers from './Followers';
import Media from './Media';
import Tweets from './Tweets';
import WhoToFollow from './WhoToFollow';
import Trends from './Trends';
import Footer from './Footer';
import userDataFetchData from './actions';
import type { UserData } from './types';

const Main = styled.main`
  background: #e6ecf0;
`;

const ProfileBackground = styled.img`
  width: 100%;
  height: 380px;
  object-fit: cover;
  display: block;
`;

const Temporary = ({ location }) => (
  <h1>
    {location.pathname}
  </h1>
);

type Props = {
  userData: UserData,
  fetchUserData: Function,
  dispatch: Function,
};

type Match = {
  match: {
    params: {
      id: string
    },
    path: string,
    url: string
  }
}

class Profile extends React.Component<Match, Props> {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      dispatch,
    } = this.props;
    dispatch(userDataFetchData(id));
  }

  render() {
    const { match } = this.props;
    const { id } = match.params;
    const { userData } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <title>
            {`${userData.username}`}
          </title>
        </Helmet>
        <ProfileBackground src={userData.header_static} />
        <Statistics
          user={userData.id}
          count={userData.statuses_count}
          following={userData.following_count}
          followers={userData.followers_count}
        />
        <Main>
          <Grid>
            <Row>
              <Col lg={3}>
                <ProfileInfo
                  id={userData.id}
                  username={userData.username}
                  note={userData.note}
                  avatar={userData.avatar}
                  displayName={userData.display_name}
                  created={userData.created_at}
                  url={userData.url}
                  followed={false}
                  official={false}
                />
                <Followers />
                <Media />
              </Col>
              <Col lg={6}>
                <Route
                  exact
                  path={`/${id}/(tweets|with_replies|media)?`}
                  render={() => (
                    <React.Fragment>
                      <TweetNavigation user={id} />
                      <Switch>
                        <Route
                          exact
                          path={`/${userData.id}/(tweets)?`}
                          render={() => <Tweets />}
                        />
                        <Route
                          exact
                          path={`/${id}/with_replies`}
                          render={() => (
                            <h1>
Tweets & replies
                            </h1>
                          )}
                        />
                        <Route
                          exact
                          path={`/${id}/media`}
                          render={() => (
                            <h1>
Media
                            </h1>
                          )}
                        />
                      </Switch>
                    </React.Fragment>
                  )}
                />
                <Route exact path={`/${id}/following`} render={Temporary} />
                <Route exact path={`/${id}/followers`} render={Temporary} />
                <Route exact path={`/${id}/likes`} render={Temporary} />
                <Route exact path={`/${id}/lists`} render={Temporary} />
              </Col>
              <Col lg={3}>
                <WhoToFollow />
                <Trends />
                <Footer />
              </Col>
            </Row>
          </Grid>
        </Main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ userData: state.userData });

export default connect(mapStateToProps)(Profile);
