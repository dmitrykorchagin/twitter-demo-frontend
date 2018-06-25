import React from "react";
import styled from "styled-components";
import SidebarHeading from "../SidebarHeading";
import MediaPhotos from "./MediaPhotos";
import mediaIcon from "../img/media.svg";

const Media = styled.div`
  display: flex;
  flex-direction: column;
`;

const MediaBox = styled.div`
  display: flex;
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 8px;
`;

export default () => {
  return (
    <Media>
      <SidebarHeading icon={mediaIcon} to="/media">
        522 Photos and Video
      </SidebarHeading>
      <MediaBox>
        <List>
          <MediaPhotos
            photos={`${process.env.PUBLIC_URL}/img/photos1.jpg`}
            to="/photo1"
          />
          <MediaPhotos
            photos={`${process.env.PUBLIC_URL}/img/photos2.jpg`}
            to="/photo2"
          />
          <MediaPhotos
            photos={`${process.env.PUBLIC_URL}/img/photos3.jpg`}
            to="/photo3"
          />
          <MediaPhotos
            photos={`${process.env.PUBLIC_URL}/img/photos4.jpg`}
            to="/photo4"
          />
          <MediaPhotos
            photos={`${process.env.PUBLIC_URL}/img/photos5.jpg`}
            to="/photo5"
          />
          <MediaPhotos
            photos={`${process.env.PUBLIC_URL}/img/photos6.jpg`}
            to="/photo6"
          />
        </List>
      </MediaBox>
    </Media>
  );
};
