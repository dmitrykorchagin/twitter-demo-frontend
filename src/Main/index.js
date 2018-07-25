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
import userDataFetchData from '../actions';

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

type UserData = {
  id: number,
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
};

class Profile extends React.Component<{ match: Object }, UserData> {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      fetchDataInfo,
    } = this.props;
    const token = process.env.REACT_APP_ACCESS_TOKEN || '';

    fetchDataInfo(`https://twitter-demo.erodionov.ru/api/v1/accounts/${id}?access_token=${token}`);
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
                <Followers userId={id} count={userData.followers_count} />
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
                          path={`/${id}/(tweets)?`}
                          render={() => <Tweets userId={id} />}
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

const mapDispatchToProps = dispatch => ({
  fetchDataInfo: url => dispatch(userDataFetchData(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
