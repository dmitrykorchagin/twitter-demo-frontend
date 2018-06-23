import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MediaPhotos = styled.li``;

const Link = styled(NavLink)`
  padding-right: 5px;
`;

const PhotosView = styled.img`
  width: 83px;
`;

export default ({ photos, to }) => {
  return (
    <MediaPhotos>
      <Link exact to={to}>
        <PhotosView src={photos} />
      </Link>
    </MediaPhotos>
  );
};
