import React from 'react';
import styled from 'styled-components';

const MediaPhotos = styled.li``;

const Photos = styled.div`
  padding-right: 5px;
`;

const PhotosView = styled.img`
  width: 83px;
`;

export default ({ photos }: { photos: string }) => (
  <MediaPhotos>
    <Photos>
      <PhotosView src={photos} />
    </Photos>
  </MediaPhotos>
);
