import React from "react";
import styled from "styled-components";
import Description from "./Description";
import Followers from "./Followers/";
import Media from "./Media/";
import Tweets from "./Tweets/";
import { Grid, Row, Col } from "react-flexbox-grid";

const Main = styled.main`
  background: #e6ecf0;
`;

export default () => {
  return (
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
        </Row>
      </Grid>
    </Main>
  );
};
