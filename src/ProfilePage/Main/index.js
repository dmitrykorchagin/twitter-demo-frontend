import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Description from './Description';
import Followers from './Followers';
import Media from './Media';
import Tweets from './Tweets';
import WhoToFollow from './WhoToFollow';
import Trends from './Trends';
import Footer from './Footer';

const Main = styled.main`
  background: #e6ecf0;
`;

export default () => (
  <Main>
    <Grid>
      <Row>
        <Col lg={3}>
          <Description />
          <Followers />
          <Media />
        </Col>
        <Col lg={6}>
          <Tweets />
        </Col>
        <Col lg={3}>
          <WhoToFollow />
          <Trends />
          <Footer />
        </Col>
      </Row>
    </Grid>
  </Main>
);
