import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Helmet from 'react-helmet';
import Statistics from './Statistics';
import Description from './Description/Description';
import Followers from './Followers';
import Media from './Media';
import Tweets from './Tweets';
import WhoToFollow from './WhoToFollow';
import Trends from './Trends';
import Footer from './Footer';
import users from '../data/users';
import suggestedUsers from '../data/suggestedUsers';
import media from '../data/media';

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

export default ({ match }) => {
  const { user } = match.params;
  const uinfo = users.find(userr => userr.id === user);
  return (
    <React.Fragment>
      <Helmet>
        <title>
          {`${uinfo.name}`}
        </title>
      </Helmet>
      <ProfileBackground src={uinfo.background} />
      <Statistics user={user} />
      <Main>
        <Grid>
          <Row>
            <Col lg={3}>
              <Description
                avatar={uinfo.avatar}
                id={uinfo.id}
                name={uinfo.name}
                official={uinfo.official}
                followed={uinfo.followed}
                about={uinfo.about}
                location={uinfo.location}
                link={uinfo.link}
                joined={uinfo.joined}
              />
              <Followers />
              <Media data={media} />
            </Col>
            <Col lg={6}>
              <Route exact path={`/${user}`} render={Tweets} />
              <Route exact path={`/${user}/following`} render={Temporary} />
              <Route exact path={`/${user}/followers`} render={Temporary} />
              <Route exact path={`/${user}/likes`} render={Temporary} />
              <Route exact path={`/${user}/lists`} render={Temporary} />
            </Col>
            <Col lg={3}>
              <WhoToFollow data={suggestedUsers} />
              <Trends />
              <Footer />
            </Col>
          </Row>
        </Grid>
      </Main>
    </React.Fragment>
  );
};
