import React from 'react';
import styled from 'styled-components';
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

import suggestedUsers from '../data/suggestedUsers';
import media from '../data/media';
import followers from '../data/followers';
import trends from '../data/trends';

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

class Profile extends React.Component {
  state = {
    userData: [],
  };

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    fetch(
      `https://twitter-demo.erodionov.ru/api/v1/accounts/${id}?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`,
    )
      .then(result => result.json())
      .then(response => this.setState({
        userData: response,
      }));
  }

  render() {
    const { match } = this.props;
    const { id } = match.params;
    const {
      userData, location,
    } = this.state;
    return (
      <React.Fragment>
        <Helmet>
          <title>
            {`${userData.username}`}
          </title>
        </Helmet>
        <ProfileBackground src={userData.header_static} />
        <Statistics user={userData.id} count={userData.statuses_count} />
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
                  location={location}
                  followed={false}
                  official={false}
                />
                <Followers data={followers} />
                <Media data={media} />
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
                          render={() => <Tweets user={id} />}
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
                <Route exact path={`/${id}`} render={() => <Tweets user={id} />} />
                <Route exact path={`/${id}/following`} render={Temporary} />
                <Route exact path={`/${id}/followers`} render={Temporary} />
                <Route exact path={`/${id}/likes`} render={Temporary} />
                <Route exact path={`/${id}/lists`} render={Temporary} />
              </Col>
              <Col lg={3}>
                <WhoToFollow data={suggestedUsers} />
                <Trends data={trends} />
                <Footer />
              </Col>
            </Row>
          </Grid>
        </Main>
      </React.Fragment>
    );
  }
}

export default Profile;
