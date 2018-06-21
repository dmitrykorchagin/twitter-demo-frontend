import React from "react";
import styled from "styled-components";
import SidebarHeading from "../SidebarHeading";
import MediaPhotos from "./MediaPhotos";
import mediaIcon from "../img/media.svg";
import photos1 from "../img/photos1.jpg";
import photos2 from "../img/photos2.jpg";
import photos3 from "../img/photos3.jpg";
import photos4 from "../img/photos4.jpg";
import photos5 from "../img/photos5.jpg";
import photos6 from "../img/photos6.jpg";

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
      <SidebarHeading
        icon={mediaIcon}
        title="522 Photos and Video"
        to="/media"
      />
      <MediaBox>
        <List>
          <MediaPhotos photos={photos1} to="/photo1" />
          <MediaPhotos photos={photos2} to="/photo2" />
          <MediaPhotos photos={photos3} to="/photo3" />
          <MediaPhotos photos={photos4} to="/photo4" />
          <MediaPhotos photos={photos5} to="/photo5" />
          <MediaPhotos photos={photos6} to="/photo6" />
        </List>
      </MediaBox>
    </Media>
  );
};
