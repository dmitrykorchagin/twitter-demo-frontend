import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MediaPhotos = styled.li``;

const MediaPhotosLink = styled(NavLink)`
  padding-right: 5px;
`;

const MediaPhotosView = styled.img``;

export default ({ photos, photosLink }) => {
  return (
    <MediaPhotos>
      <MediaPhotosLink exact to={photosLink}>
        <MediaPhotosView src={photos} />
      </MediaPhotosLink>
    </MediaPhotos>
  );
};
